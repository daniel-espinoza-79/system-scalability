const { migrateBrandsData } = require("./brands.migration");
const { migrateCategoriesData } = require("./category.migration");
const { migrateProductsData } = require("./product.migration");
const { migrateSuppliersData } = require("./suppliers.migration");

async function main() {
  await migrateBrandsData();
  await migrateCategoriesData();
  await migrateProductsData();
  await migrateSuppliersData();
}

main();