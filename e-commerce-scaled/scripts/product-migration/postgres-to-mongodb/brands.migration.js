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
  if (Array.isArray(value)) return value;
  if (value)
    return value
      .replace(/[{}"]/g, "")
      .split(",")
      .map((item) => item.trim());
  return [];
}

async function migrateBrandsData() {
  try {
    await pgClient.connect();
    const query = `SELECT id as brand_id, name as brand_name FROM brands;`;
    const result = await pgClient.query(query);
    const brandsWithProducts = [];

    for (const row of result.rows) {
      const productQuery = `
SELECT p.id as product_id, 
       p.name as product_name, 
       p.price as product_price, 
       c.name as category_name, 
       array_agg(DISTINCT pi.image) as image_products
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN product_images pi ON p.id = pi.product_id
WHERE p.brand_id = '${row.brand_id}'
GROUP BY p.id, p.name, p.price, c.name
LIMIT 10;

      `;

      const brandProducts = await pgClient.query(productQuery);
      const brand = {
        id: row.brand_id,
        name: row.brand_name,
        products: brandProducts.rows.map((product) => ({
          id: product.product_id,
          name: product.product_name,
          price: product.product_price,
          category: product.category_name,
          image: convertToArray(product.image_products)[0],
        })),
      };

      brandsWithProducts.push(brand);
    }

    await mongoClient.connect();
    const db = mongoClient.db("productsdb");
    const productsCollection = db.collection("brands");
    const resultBrands =  await productsCollection.insertMany(brandsWithProducts);

    console.log(
      `${resultBrands.insertedCount} brands with products inserted into MongoDB`
    );
  } catch (error) {
    console.error("Error when migrating data:", error);
  } finally {
    await pgClient.end();
    await mongoClient.close();
    console.log("Connections closed");
  }
}

module.exports = { migrateBrandsData };
