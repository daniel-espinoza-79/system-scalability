## Brands Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/view/brands` | Get all brands |
| GET | `/api/view/brands/{id}` | Get a brand by ID |

## Categories Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/view/categories` | Get all categories |
| GET | `/api/view/categories/{id}` | Get a category by ID |

## Products Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/view/product` | Get all products |
| GET | `/api/view/product/{id}` | Get a product by ID |

### Product Filters

The `GET /api/view/product` endpoint supports the following query parameters:
- `page`: Page number for pagination
- `limit`: Number of items per page
- `brand`: Filter products by brand
- `category`: Filter products by category
- `search`: Search products by keyword

## Suppliers Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/view/suppliers` | Create a supplier |
| GET | `/api/view/suppliers` | Get all suppliers |
| GET | `/api/view/suppliers/{id}` | Get a supplier by ID |
| PUT | `/api/view/suppliers/{id}` | Update a supplier |
| DELETE | `/api/view/suppliers/{id}` | Delete a supplier |
