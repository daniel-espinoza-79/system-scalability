const ADMIN_KEY = "admin";
const DESCRIPTION =
  "The Llama Gamer E Commerce API is a RESTful API that allows you to manage the products, brands, categories, countries, and users of the Llama Gamer E Commerce application.";
const ENV = process.env.ENV ?? "development";
const HASH_SALT = 10;
const PORT = process.env.PORT ?? 3000;
const PREFIX = "/api/view";
const PUBLIC_KEY = "public";
const TITLE = "The Llama Gamer E Commerce API";
const VERSION = "1.0";
const DB_URL = "mongodb://root:example@localhost:27017/productsdb";

export {
  ADMIN_KEY,
  DESCRIPTION,
  ENV,
  HASH_SALT,
  PORT,
  PREFIX,
  PUBLIC_KEY,
  TITLE,
  VERSION,
  DB_URL,
};
