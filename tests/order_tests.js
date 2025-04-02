import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export let options = {
  scenarios: {
    create_purchase: {
      executor: 'per-vu-iterations',
      vus: 80,         // 80 VUs * 35 iterations = 2800 requests of creation
      iterations: 35,
      maxDuration: '1m',
      exec: 'createPurchase',
    },
    get_all: {
      executor: 'per-vu-iterations',
      vus: 25,         // 25 VUs * 10 iterations = 250 requests to the endpoint GET (all)
      iterations: 10,
      maxDuration: '1m',
      exec: 'getAll',
    },
    get_by_id: {
      executor: 'per-vu-iterations',
      vus: 25,         // 25 VUs * 10 iterations = 250 requests to the endpoint GET by id
      iterations: 10,
      maxDuration: '1m',
      exec: 'getById',
    },
  },
};

const BASE_URL = 'http://172.20.41.8:8000/purchases';

function generateObjectId() {
    let objectId = '';
    const hexChars = '0123456789abcdef';
    for (let i = 0; i < 24; i++) {
        objectId += hexChars[Math.floor(Math.random() * 16)];
    }
    return objectId;
}

export function createPurchase() {
    const product = {
        id: "prod-1",
        amount: 1,
        price_per_unit: 100,
        price_per_products: 100, // amount * price_per_unit
    };
    
    const subtotal = product.price_per_products;
    const taxes = subtotal * 0.16; 
    const total = subtotal + taxes;

    const payload = JSON.stringify({
        products: [ product ],
        subtotal: subtotal,
        taxes: taxes,
        total: total,
    });
  const params = { headers: { "Content-Type": "application/json" } };
  let res = http.post(BASE_URL, payload, params);

  check(res, { "status es 200 o 201": (r) => r.status === 200 || r.status === 201 });
  sleep(1);
}

export function getAll() {
  let res = http.get(BASE_URL);
  check(res, { "status es 200": (r) => r.status === 200 });
  sleep(1);
}

export function getById() {
  let id = generateObjectId();
  let res = http.get(`${BASE_URL}/${id}`);
  check(res, { "status es 200 o 404": (r) => r.status === 200 || r.status === 404 });
  sleep(1);
}
