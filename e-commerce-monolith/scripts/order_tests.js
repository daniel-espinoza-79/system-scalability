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

const BASE_URL = 'http://localhost:3000/api/purchases';

export function createPurchase() {
  const payload = JSON.stringify({
    totalCost: 100.5,
    deliveyDay: new Date().toISOString(),
    deadline: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    purchaseProducts: [
      {
        productId: "01e33cf1-3390-4243-ba71-e051faf0b424",
        quantity: 2,
      },
    ],
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };

  let res = http.post(BASE_URL, payload, params);

  check(res, {
    "status es 200 o 201": (r) => r.status === 200 || r.status === 201,
  });

  sleep(1);
}

export function getAll() {
  let res = http.get(BASE_URL);
  check(res, { "status es 200": (r) => r.status === 200 });
  sleep(1);
}

export function getById() {
  let id = generateUUID();
  let res = http.get(`${BASE_URL}/${id}`);
  check(res, { "status es 200 o 404": (r) => r.status === 200 || r.status === 404 });
  sleep(1);
}
