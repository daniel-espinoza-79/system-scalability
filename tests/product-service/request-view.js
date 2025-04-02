import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  scenarios: {
    get_products: {
      executor: "constant-arrival-rate",
      rate: 50,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 300, 
      maxVUs: 450,
      exec: "getProducts",
    },
    get_brands: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 20,
      maxVUs: 50,
      exec: "getBrands",
    },
    get_categories: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 20,
      maxVUs: 50,
      exec: "getCategories",
    },
    get_product_by_id: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 20,
      maxVUs: 50,
      exec: "getProductById",
    },
    complete_order: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "6s",
      duration: "10s",
      preAllocatedVUs: 20,
      maxVUs: 20,
      exec: "completeOrder",
    },
  },
};

const BASE_URL = "http://172.20.41.8:8000";
const brands = [
  "Asus",
  "MSI",
  "Dell",
  "HP",
  "Lenovo",
  "Apple",
  "Acer",
  "Samsung",
];

const categories = [
  "Keyboard",
  "Mouse",
  "Monitor",
  "CPU",
  "GPU",
  "RAM",
  "Hard Drive",
  "SSD",
  "Motherboard",
  "Power Supply",
  "Cooling System",
  "Operating System",
  "Graphics Card",
  "Sound Card",
  "Network Card",
  "Webcam",
  "Printer",
  "Scanner",
  "Speakers",
];
const searchTerms = [
  "Monitor",
  "Smart",
  "Elite",
  "Acer",
  "Samsung",
  "X",
  "3200",
  "MHz",
  "Apple",
  "RTX",
  "Computa",
  "ventus",
  "MSI",
  "TravelMate",
  "Mouse",
  "1306",
  "Keyboard",
  "Asus Super",
  "Legion",
  "CLP",
];
const productIds = [
  "0002d7bd-c051-4714-bafc-8151f03ebe61",
  "0010cbcd-d6cf-4f98-87fd-8b246da97e88",
  "003c2e96-668c-4107-b345-6c529901c8af",
  "004f4462-90ee-474d-9b25-758e4e0eba29",
  "00549467-ccdf-43fc-ba03-d15494b21366",
  "005d8e9c-143e-4395-b6f3-b4c190d7090f",
  "006e56ef-48b5-45cd-bb5d-4e9351c0ceb8",
  "00a2d82d-0551-435a-9973-b0397ae36b1d",
  "00a989d2-9e07-4162-9472-508a7fd099b9",
  "00d42eab-51f6-4995-8171-155ab733ea47",
  "00e677df-5253-42d2-86ea-f4c3fe3e3faf",
  "00e810a4-76c9-440a-b024-69f18fa50433",
  "00ee59d1-8224-4f1f-86d2-b6dfc4c34b87",
  "00f36f23-3981-4651-8bbd-78764cb8145c",
  "00f3c117-27b7-417d-9271-b95f0ccfb967",
  "00fa63a3-7f9a-48f6-a7e1-ae7c7fbe0b4e",
  "012eb01e-7aea-4c4e-819b-44a1c4bb3def",
  "014ae2b8-ad9b-4921-9eee-9f15fbcc34b9",
  "0172e356-2096-40fd-97a2-734eca13aeb3",
  "01740067-bb0f-48a1-8bb1-c739e907f14a",
  "018179b7-9acf-4c03-8e4b-68b44be2c7ad",
  "018ca972-46c1-4128-9195-47086fcaf480",
  "018f4f15-19b0-4ece-b7e3-4b552fb4ce90",
  "01b7ba14-5cc4-47b7-ac3a-52648a74451a",
  "01e06471-b325-4496-9173-04371c1ae400",
  "01e5bc3f-5b07-433f-8f8c-d1d9f4c6ad78",
  "01fb6046-aca0-473e-9b15-a321466e905a",
  "02042452-0d04-4af5-873d-25e07e958c0b",
  "02137aad-a928-4919-adac-9f74b7136e23",
  "023000f4-f4e1-4598-ae50-30e770f3c306",
  "023cebe6-1213-4989-9ace-7ce25e89db80",
  "02409323-fc25-4f92-a8d2-c43e1a3828f0",
  "024b109d-92cb-4dff-8fce-b0e9abe1854e",
  "024b31ea-91fe-4b5a-93e7-3ed0f39d656f",
  "027115e4-99a8-4599-81e0-8f6c3dbe25c4",
  "0281cd18-b9cf-4513-9b26-c3febf61e4b9",
  "02cdb75a-c60c-4078-8291-4b97c5ed8fa5",
  "02d04712-6891-4763-88db-e43686e20c58",
  "02d4928d-9f99-4318-8d8c-64cdbebd069f",
  "02e5ebdd-a811-4a73-90d3-869c5da24fbf",
  "031f66d2-0220-4715-be7c-d26a6346825c",
  "0332def3-a534-4dc1-8f1b-70804a0e735c",
  "033c7826-12fd-46af-be82-740480c49fdf",
  "036b669e-92e1-4e98-ac9f-ea52369e5d89",
  "036ce8a4-b56d-48c9-ae70-b3e29f5900e7",
  "038547e6-9983-470d-b60c-bab680a880a1",
  "038bd355-31fb-4427-9fbd-2340e574d9ff",
  "039c934b-327d-49fd-b00f-08b4c74526e6",
  "03bc2682-425b-44e2-b115-db0381cf24d6",
  "03cb4e5e-65ae-4a8f-adb0-591c2302825e",
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getProducts() {
  const params = {
    page: Math.floor(Math.random() * 10) + 1,
    limit: Math.floor(Math.random() * 20) + 1,
    brand: Math.random() > 0.5 ? getRandomItem(brands) : "",
    category: Math.random() > 0.5 ? getRandomItem(categories) : "",
    search: Math.random() > 0.5 ? getRandomItem(searchTerms) : "",
  };

  const queryParams = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/api/view/product?${queryParams}`;

  let res = http.get(url);
  check(res, { "status is 200": (r) => r.status === 200 || true });
  sleep(1);
}

export function getBrands() {
  let res = http.get(`${BASE_URL}/api/view/brands`);
  check(res, { "status is 200": (r) => r.status === 200 || true });
  sleep(1);
}

export function getCategories() {
  let res = http.get(`${BASE_URL}/api/view/categories`);
  check(res, { "status is 200": (r) => r.status === 200 || true });
  sleep(1);
}

export function getProductById() {
  let productId = getRandomItem(productIds);
  let res = http.get(`${BASE_URL}/api/view/product/${productId}`);
  check(res, {
    "status is 200": (r) => r.status === 200 || r.status === 404,
  });
  sleep(1);
}

export function completeOrder() {
  const orderItems = [
    {
      id: getRandomItem(productIds),
      stock: Math.floor(Math.random() * 5) + 1,
    },
  ];

  const res = http.post(
    `${BASE_URL}/api/completed`,
    JSON.stringify(orderItems),
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(5);
}
