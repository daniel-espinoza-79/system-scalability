# The Llama Gamer E-Commerce API

## Overview

The Llama Gamer E-Commerce API is a RESTful API that allows you to manage products, brands, categories, suppliers, countries, and related resources for the Llama Gamer E-Commerce application.

## Authentication

The API uses JWT Bearer token authentication. Include your token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## API Endpoints

### Countries

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/countries` | Create a new country |
| GET | `/api/countries` | Get all countries |
| GET | `/api/countries/{id}` | Get a country by ID |
| PATCH | `/api/countries/{id}` | Update a country by ID |
| DELETE | `/api/countries/{id}` | Delete a country by ID |

### Suppliers

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/suppliers` | Create a new supplier |
| GET | `/api/suppliers` | Get all suppliers |
| GET | `/api/suppliers/{id}` | Get a supplier by ID |
| PATCH | `/api/suppliers/{id}` | Update a supplier by ID |
| DELETE | `/api/suppliers/{id}` | Delete a supplier by ID |

### Brands

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/brands` | Create a new brand |
| PATCH | `/api/brands/{id}` | Update a brand by ID |
| DELETE | `/api/brands/{id}` | Delete a brand by ID |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/categories` | Create a new category |
| PATCH | `/api/categories/{id}` | Update a category by ID |
| DELETE | `/api/categories/{id}` | Delete a category by ID |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/product` | Create a new product |
| PATCH | `/api/product/{id}` | Update a product by ID |
| DELETE | `/api/product/{id}` | Delete a product by ID |
| POST | `/api/product/test` | Test endpoint |

### Product Images

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/product-image` | Create a new product image |
| GET | `/api/product-image` | Get all product images |
| GET | `/api/product-image/{id}` | Get a product image by ID |
| PATCH | `/api/product-image/{id}` | Update a product image by ID |
| DELETE | `/api/product-image/{id}` | Delete a product image by ID |

### Products Suppliers

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/products-suppliers` | Create a new product-supplier relationship |
| GET | `/api/products-suppliers` | Get all product-supplier relationships |
| GET | `/api/products-suppliers/{productId}/{supplierId}` | Get a specific product-supplier relationship |
| PATCH | `/api/products-suppliers/{productId}/{supplierId}` | Update a product-supplier relationship |
| DELETE | `/api/products-suppliers/{productId}/{supplierId}` | Delete a product-supplier relationship |

## Data Models

### Country

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "United States",
  "tax": 0.07,
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z"
}
```

### Supplier

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "email": "intel@gmail.com",
  "deliveryTime": 5,
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "countryId": "123e4567-e89b-12d3-a456-426814174001",
  "country": {
    // Country object
  }
}
```

### Brand

```json
{
  "id": "d0f02b9c-1d9a-4f1a-9e2a-3d9a3b0c4c7e",
  "name": "Asus",
  "logo": "https://test-logo.com/test.png",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "products": [
    // Product objects
  ]
}
```

### Category

```json
{
  "id": "f6a5d5c0-7e3a-4f1f-9d1e-3e5d8e5f8a3e",
  "name": "Mouse",
  "image": "http://www.example.com/imagen1.png",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "products": [
    // Product objects
  ]
}
```

### Product

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Laptop",
  "description": "A powerful laptop for all your needs",
  "stock": 190,
  "price": 999.99,
  "isAvailable": true,
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "categoryId": "123e4567-e89b-12d3-a456-426814174002",
  "brandId": "123e4567-e89b-12d3-a456-426814174003",
  "category": {
    // Category object
  },
  "brand": {
    // Brand object
  },
  "productImages": [
    // ProductImage objects
  ],
  "productsSuppliers": [
    // ProductsSuppliers objects
  ]
}
```

### ProductImage

```json
{
  "id": "123e4567-e89b-1r33-a456-426814174001",
  "image": "https://example.com/image.png",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "productId": "123e4567-e89b-1r33-a456-426814174001"
}
```

### ProductsSuppliers

```json
{
  "productId": "123e4567-e89b-1r33-a456-426814174001",
  "supplierId": "123e4567-e89b-1r33-a456-426814174001",
  "createdAt": "2021-01-01T00:00:00.000Z"
}
```

## Request Examples

### Create a new country

```http
POST /api/countries
Content-Type: application/json

{
  "name": "United States",
  "tax": 0.07
}
```

### Create a new product

```http
POST /api/product
Content-Type: application/json

{
  "name": "Keyboard Red Dragon",
  "description": "Experience cable-free freedom and exceptional performance with our Wireless RGB Mechanical Keyboard.",
  "stock": 190,
  "price": 156.50,
  "categoryId": "123e4567-e89b-1r33-a456-426814174001",
  "brandId": "123e4567-e89b-12d3-a456-408814174001"
}
```

### Create a product-supplier relationship

```http
POST /api/products-suppliers
Content-Type: application/json

{
  "productId": "123e4567-e89b-1r33-a456-426814174001",
  "supplierId": "123e4567-e89b-1r33-a456-426814174001"
}
```