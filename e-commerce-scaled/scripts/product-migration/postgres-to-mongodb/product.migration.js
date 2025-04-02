const { Client } = require("pg");
const { MongoClient } = require("mongodb");

const pgClient = new Client({
  host: "localhost",
  port: 3030,
  user: "user",
  password: "password",
  database: "productsdb",
});

const mongoUrl = "mongodb://root:example@localhost:27017";
const mongoClient = new MongoClient(mongoUrl);
function convertToArray(value) {
  if (Array.isArray(value)) {
    return value; 
  }

  if (value) {
    return value
      .replace(/[{}"]/g, "")
      .split(",")
      .map((item) => item.trim());
  }

  return [];
}
async function migrateProductsData() {
  try {
    await pgClient.connect();
    console.log("Connected to PostgreSQL");

    const query = `
      SELECT p.id as product_id,
       p.name as product_name,
       p.description as product_description,
       p.stock as product_stock,
       p.price as product_price,
       p.is_available as product_is_available,
       p.created_at as product_created_at,
       c.name as category_name,
       b.name as brand_name,
	    array_agg(DISTINCT pi.image) as image_products,
       array_agg(DISTINCT co.name) as supplier_countries
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN brands b ON p.brand_id = b.id
JOIN products_suppliers ps ON p.id = ps.product_id
JOIN suppliers s ON ps.supplier_id = s.id
JOIN countries co ON s.country_id = co.id
JOIN product_images pi ON p.id = pi.product_id
GROUP BY p.id, c.name, b.name;
    `;

    const result = await pgClient.query(query);

    await mongoClient.connect();
    const db = mongoClient.db("productsdb");
    const productsCollection = db.collection("products");

    const products = result.rows.map((row) => ({
      id: row.product_id,
      name: row.product_name,
      description: row.product_description,
      stock: row.product_stock,
      price: row.product_price,
      isAvailable: row.product_is_available,
      createdAt: row.product_created_at,
      category: row.category_name,
      brand: row.brand_name,
      productImages: convertToArray(row.image_products),
      suppliers: convertToArray(row.supplier_countries),
    }));

    const resultProducts = await productsCollection.insertMany(products);
    console.log(
      `${resultProducts.insertedCount} products inserted into MongoDB`
    );
  } catch (error) {
    console.error("Error when migrating data:", error);
  } finally {
    await pgClient.end();
    await mongoClient.close();
    console.log("Connections closed");
  }
}

module.exports = { migrateProductsData };