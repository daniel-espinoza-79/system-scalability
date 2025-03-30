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

async function migrateCategoriesData() {
  try {
    await pgClient.connect();
    console.log("Connected to PostgreSQL");

    const query = `
      SELECT id, name, image
      FROM categories;
    `;

    const result = await pgClient.query(query);

    await mongoClient.connect();
    const db = mongoClient.db("productsdb");
    const categoriesCollection = db.collection("categories");

    const categories = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      image: row.image
    }));

    const resultCategories = await categoriesCollection.insertMany(categories);
    console.log(
      `${resultCategories.insertedCount} categories inserted into MongoDB`
    );
  } catch (error) {
    console.error("Error when migrating data:", error);
  } finally {
    await pgClient.end();
    await mongoClient.close();
    console.log("Connections closed");
  }
}


module.exports = { migrateCategoriesData };