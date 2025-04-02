const { faker } = require("@faker-js/faker");
const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

const {
  brandCategoryMap,
  countriesdb,
  brandsdb,
  categoriesdb,
  productsdb,
  brandsIds,
} = require("./data");

const suppliers = [];

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "productsdb",
  password: "password",
  port: 3030,
});

async function seedCountries() {
  const countries = [];
  countriesdb.forEach((cnt) => {
    countries.push({
      id: uuidv4(),
      name: cnt.name,
      tax: cnt.tax,
    });
  });
  const query = `INSERT INTO countries (id, name, tax, created_at, updated_at) VALUES ${countries
    .map((c) => `('${c.id}', '${c.name}', '${c.tax}', NOW(), NOW())`)
    .join(", ")}`;
  await pool.query(query);
  return countries;
}

async function seedSuppliers(countries) {
  countries.forEach((country) => {
    suppliers.push({
      id: uuidv4(),
      email: `supplier_${country.name
        .toLowerCase()
        .replace(/\s+/g, "_")}@example.com`,
      deliveryTime: Math.floor(Math.random() * 180 + 1),
      countryId: country.id,
    });
  });

  const query = `INSERT INTO suppliers(id, email, delivery_time, created_at, updated_at, country_id) 
  VALUES ${suppliers
    .map(
      (s) =>
        `('${s.id}', '${s.email}', '${s.deliveryTime}', NOW(), NOW(), '${s.countryId}')`
    )
    .join(", ")}`;
  await pool.query(query);
  return suppliers;
}

async function seedCategories() {
  const categories = [];
  categoriesdb.forEach((cat) => {
    categories.push({
      id: uuidv4(),
      name: cat.name,
      image: cat.image,
    });
  });
  const query = `INSERT INTO categories (id, name, image, created_at, update_at) VALUES ${categories
    .map((c) => `('${c.id}', '${c.name}', '${c.image}', NOW(), NOW())`)
    .join(", ")}`;
  await pool.query(query);
  return categories;
}

async function seedBrands() {
  const brands = [];
  brandsdb.forEach((b) => {
    brands.push({
      id: uuidv4(),
      name: b.name,
      logo: b.logo,
    });
  });
  const query = `INSERT INTO brands (id, name, logo, created_at, updated_at) VALUES ${brands
    .map((b) => `('${b.id}', '${b.name}', '${b.logo}', NOW(), NOW())`)
    .join(", ")}`;
  await pool.query(query);
  return brands;
}

async function seedProducts(n = 5, brandIds, catIds) {
  const products = [];
  let i = 0;
  for (let k = 0; k < n; k++) {
    for (const brandObj of brandIds) {
      const brandName = Object.keys(brandObj)[0];
      const brandId = brandObj[brandName];
      productsdb[brandName].forEach((p) => {
        i++;
        products.push({
          id: uuidv4(),
          name: p.name + " " + i + "-" + k,
          description: p.description,
          stock: faker.number.int({ min: 500, max: 1000 }),
          price: faker.number.float({ min: 10, max: 500, precision: 0.01 }),
          category_id: catIds[p.category],
          brand_id: brandId,
        });
      });
    }
  }

  const query = `INSERT INTO products (id, name, description, stock, price, is_available, created_at, updated_at, category_id, brand_id) VALUES ${products
    .map(
      (p) =>
        `('${p.id}', '${p.name}', '${p.description}', ${p.stock}, ${p.price}, true, NOW(), NOW(), '${p.category_id}', '${p.brand_id}')`
    )
    .join(", ")}`;
  await pool.query(query);
  return products;
}

async function seedProductImages(productIds) {
  const query = `INSERT INTO product_images(
	id, image, created_at, updated_at, product_id) VALUES ${productIds
    .map(
      (p) =>
        `('${uuidv4()}', 'https://i.ibb.co/HgfxQGH/product.png', NOW(), NOW(), '${p}')`
    )
    .join(", ")}`;
  await pool.query(query);
}

async function seedProductSuppliers(prods, supplierList) {
  const createProductsSuppliers = [];

  prods.forEach((prod) => {
    const suppliersIds = [];
    while (suppliersIds.length < 4) {
      const supplierId =
        supplierList[Math.floor(Math.random() * supplierList.length)].id;
      if (!suppliersIds.includes(supplierId)) {
        suppliersIds.push(supplierId);
      }
    }

    suppliersIds.forEach((sid) => {
      createProductsSuppliers.push({
        productId: prod.id,
        supplierId: sid,
      });
    });
  });

  const query = `INSERT INTO public.products_suppliers(
	product_id, supplier_id, created_at)
	VALUES ${createProductsSuppliers
    .map((p) => `('${p.productId}', '${p.supplierId}', NOW())`)
    .join(", ")}`;
  await pool.query(query);
}

async function main() {
  try {
    console.log("⏳ Seeding countries");
    const countries = await seedCountries();
    console.log("⏳ Seeding categorías...");
    const categories = await seedCategories();
    console.log("⏳ Seeding marcas...");
    const brands = await seedBrands();
    console.log("⏳ Seeding suppliers...");
    const suppliers = await seedSuppliers(countries);

    const catIds = {
      Keyboard: "https://i.ibb.co/pbVFhct/category.png",
      Mouse: "https://i.ibb.co/pbVFhct/category.png",
      Monitor: "https://i.ibb.co/pbVFhct/category.png",
      CPU: "https://i.ibb.co/pbVFhct/category.png",
      GPU: "https://i.ibb.co/pbVFhct/category.png",
      RAM: "https://i.ibb.co/pbVFhct/category.png",
      "Hard Drive": "https://i.ibb.co/pbVFhct/category.png",
      SSD: "https://i.ibb.co/pbVFhct/category.png",
      Motherboard: "https://i.ibb.co/pbVFhct/category.png",
      "Power Supply": "https://i.ibb.co/pbVFhct/category.png",
      "Cooling System": "https://i.ibb.co/pbVFhct/category.png",
      "Operating System": "https://i.ibb.co/pbVFhct/category.png",
      "Graphics Card": "https://i.ibb.co/pbVFhct/category.png",
      "Sound Card": "https://i.ibb.co/pbVFhct/category.png",
      "Network Card": "https://i.ibb.co/pbVFhct/category.png",
      Webcam: "https://i.ibb.co/pbVFhct/category.png",
      Printer: "https://i.ibb.co/pbVFhct/category.png",
      Scanner: "https://i.ibb.co/pbVFhct/category.png",
      Speakers: "https://i.ibb.co/pbVFhct/category.png",
    };

    categories.forEach((category) => {
      catIds[category.name] = category.id;
    });

    const brandIds = brands.map((brand) => {
      return {
        [brand.name]: brand.id,
      };
    });

    console.log("⏳ Seeding productos...");
    const prods = await seedProducts(5, brandIds, catIds);

    console.log("⏳ Seeding product images...");
    await seedProductImages(prods.map((p) => p.id));

    console.log("⏳ Seeding product suppliers...");
    await seedProductSuppliers(prods, suppliers);

    console.log("✅ Data stored successfully");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    pool.end();
  }
}

main();
