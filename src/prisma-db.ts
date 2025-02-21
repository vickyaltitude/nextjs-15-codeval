import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedProducts = async () => {
  const productCount = await prisma.product.count();
  if (productCount === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 500,
          description: "Clean wood table for kids",
        },
        { title: "Product 2", price: 700, description: "Toy for kids" },
        {
          title: "Product 3",
          price: 1100,
          description: "car washer and 3 in one car cleaner",
        },
      ],
    });
  }
};

seedProducts();

export async function getProducts() {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.findUnique({ where: { id } });
}

export async function addProduct(
  title: string,
  price: number,
  description: string
) {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.create({
    data: { title, price, description },
  });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.delete({
    where: { id },
  });
}
