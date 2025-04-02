import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export let options = {
  scenarios: {
    create_purchase: {
      executor: 'per-vu-iterations',
      vus: 50,         // 50 VUs * 10 iterations = 500 requests of creation
      iterations: 10,
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

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


export function createPurchase() {
  const payload = JSON.stringify({
    totalCost: 100.5,
    deliveyDay: new Date().toISOString(),
    deadline: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    status: "PENDING",
    user: {
      connect: { id: generateUUID() },
    },
    purchasesProducts: {
      create: [
        {
          productId: generateUUID(),
          quantity: 2,
        },
      ],
    },
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
