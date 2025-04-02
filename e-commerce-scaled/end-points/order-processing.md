# Purchases API

## Overview

The Purchases API provides endpoints to manage purchase transactions in the system. It allows retrieving all purchases, getting a specific purchase by ID, and creating new purchases.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/purchases` | Get all purchases |
| GET | `/api/purchases/{id}` | Get a purchase by ID |
| POST | `/api/purchases` | Create a new purchase |

## API Usage

### Get All Purchases

Retrieves a list of all purchases in the system.

```http
GET /api/purchases
```

**Response:**
```json
[
  {
    "id": "purchase-id-1",
    "customerId": "customer-id-1",
    "productId": "product-id-1",
    "quantity": 2,
    "totalAmount": 199.98,
    "date": "2025-03-30T14:25:43.511Z"
  },
  {
    "id": "purchase-id-2",
    "customerId": "customer-id-2",
    "productId": "product-id-3",
    "quantity": 1,
    "totalAmount": 156.50,
    "date": "2025-03-31T09:12:22.357Z"
  }
]
```

### Get Purchase by ID

Retrieves a specific purchase by its unique identifier.

```http
GET /api/purchases/{id}
```

**Path Parameters:**
- `id` (required) - The unique identifier of the purchase

**Response:**
```json
{
  "id": "purchase-id-1",
  "customerId": "customer-id-1",
  "productId": "product-id-1",
  "quantity": 2,
  "totalAmount": 199.98,
  "date": "2025-03-30T14:25:43.511Z"
}
```

### Create a Purchase

Creates a new purchase in the system.

```http
POST /api/purchases
Content-Type: application/json

{
  "customerId": "customer-id-1",
  "productId": "product-id-1",
  "quantity": 2
}
```

**Request Body:**
- `customerId` (required) - ID of the customer making the purchase
- `productId` (required) - ID of the product being purchased
- `quantity` (required) - Number of items being purchased

**Response:**
```json
{
  "id": "generated-purchase-id",
  "customerId": "customer-id-1",
  "productId": "product-id-1",
  "quantity": 2,
  "totalAmount": 199.98,
  "date": "2025-04-01T10:15:30.123Z"
}
```

## Data Model

### Purchase Object

```typescript
interface Purchase {
  id: string;         // Unique identifier of the purchase
  customerId: string; // Reference to the customer who made the purchase
  productId: string;  // Reference to the purchased product
  quantity: number;   // Number of items purchased
  totalAmount: number; // Total cost of the purchase
  date: Date;         // Timestamp when the purchase was made
}
```

### CreatePurchaseDto

```typescript
interface CreatePurchaseDto {
  customerId: string; // ID of the customer
  productId: string;  // ID of the product
  quantity: number;   // Number of items to purchase
}
```