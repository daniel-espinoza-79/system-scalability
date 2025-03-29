import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { brands, categories, countries, products } from './data/products';

const prisma = new PrismaClient();

/**
 * Seed the database with data
 */
async function seed() {
  await prisma.country.createMany({
    data: countries,
  });

  await prisma.brand.createMany({
    data: brands,
  });

  await prisma.category.createMany({
    data: categories,
  });

  const brandList = await prisma.brand.findMany();
  const categoryList = await prisma.category.findMany();

  const passwordAdmin = await bcrypt.hash('admin123', 10);
  const passwordUser = await bcrypt.hash('user1234', 10);

  await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {
      password: passwordAdmin,
    },
    create: {
      name: 'admin',
      lastName: 'admin',
      email: 'admin@admin.com',
      password: passwordAdmin,
      role: Role.ADMIN,
    },
  });

  await prisma.user.upsert({
    where: { email: 'user@user.com' },
    update: {
      password: passwordUser,
    },
    create: {
      name: 'user',
      lastName: 'user',
      email: 'user@user.com',
      password: passwordUser,
      role: Role.USER,
    },
  });

  const createProducts = products.map((item) => ({
    ...item,
    brandId: brandList[Math.floor(Math.random() * brandList.length)].id,
    categoryId: categoryList[Math.floor(Math.random() * categoryList.length)].id,
  }));

  await prisma.product.createMany({
    data: createProducts,
  });

  const productList = await prisma.product.findMany();

  const createProductImages = productList.map((item) => ({
    image: 'https://i.ibb.co/HgfxQGH/product.png',
    productId: item.id,
  }));

  await prisma.productImage.createMany({
    data: createProductImages,
  });
}

seed()
  .catch((e) => {
    throw new Error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
