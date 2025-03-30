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

async function migrateSuppliersData() {
  try {
    await pgClient.connect();
    console.log("connected to PostgreSQL");

    const query = `
      SELECT s.id as supplier_id, s.email, s.delivery_time, s.created_at as supplier_created_at, 
             s.updated_at as supplier_updated_at, s.country_id, 
             c.name as country_name, c.tax as country_tax, 
             c.created_at as country_created_at, c.updated_at as country_updated_at
      FROM suppliers s
      JOIN countries c ON s.country_id = c.id;
    `;

    const result = await pgClient.query(query);

    await mongoClient.connect();
    const db = mongoClient.db("productsdb");
    const suppliersCollection = db.collection("suppliers");

    const suppliers = result.rows.map((row) => ({
      id: row.supplier_id,
      email: row.email,
      delivery_time: row.delivery_time,
      name: row.country_name,
      tax: row.country_tax,
    }));

    const resultSuppliers = await suppliersCollection.insertMany(suppliers);
    console.log(
      ` ${resultSuppliers.insertedCount} inserted suppliers in MongoDB`
    );
  } catch (error) {
    console.error("Error when migrating data:", error);
  } finally {
    await pgClient.end();
    await mongoClient.close();
    console.log("Conexiones cerradas");
  }
}


module.exports = { migrateSuppliersData };