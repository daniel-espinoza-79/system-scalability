const ADMIN_KEY = 'admin';
const DESCRIPTION =
  'The Llama Gamer E Commerce API is a RESTful API that allows you to manage users of the Llama Gamer E Commerce application.';
const ENV = process.env.ENV ?? 'development';
const HASH_SALT = 10;
const JWT_EXPIRES_IN = 1800;
const JWT_REFRESH_EXPIRES_IN = '7d';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? 'secret';
const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';
const NAME_VALIDATOR = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s']+$/;
const PASSWORD_VALIDATOR = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s']+$/;
const PRODUCT_NAME_VALIDATOR = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;

const PORT = process.env.PORT ?? 3001;
const PREFIX = '/api/user-service';
const PUBLIC_KEY = 'public';
const TITLE = 'The Llama Gamer E Commerce API';
const VERSION = '1.0';

export {
  ADMIN_KEY,
  DESCRIPTION,
  ENV,
  HASH_SALT,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
  JWT_REFRESH_SECRET,
  JWT_SECRET,
  NAME_VALIDATOR,
  PASSWORD_VALIDATOR,
  PORT,
  PREFIX,
  PRODUCT_NAME_VALIDATOR,
  PUBLIC_KEY,
  TITLE,
  VERSION,
};
