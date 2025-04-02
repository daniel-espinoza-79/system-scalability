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
