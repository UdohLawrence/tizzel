import { PrismaClient } from '@prisma/client';
import sampleData from './sampleData';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({data: sampleData.products });

  console.log("Database seeded succesfully!");

}

main();