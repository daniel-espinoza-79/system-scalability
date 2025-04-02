# User Service API Documentation

## Resumen de Endpoints

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/auth/login` | Inicia sesión de usuario | No |
| POST | `/api/auth/register` | Registra un nuevo usuario | No |
| POST | `/api/auth/refresh-token` | Renueva el token de acceso | JWT Refresh |
| POST | `/api/users` | Crea un nuevo usuario | Admin |
| GET | `/api/users` | Obtiene todos los usuarios | Admin |
| GET | `/api/users/:id` | Obtiene un usuario por ID | JWT |
| PATCH | `/api/users/:id` | Actualiza un usuario | JWT |
| DELETE | `/api/users/:id` | Elimina un usuario | JWT |
