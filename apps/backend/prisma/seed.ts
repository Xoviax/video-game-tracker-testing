import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Keep seed idempotent and minimal for deployment environments.
  console.log('Prisma seed completed (no-op).');
}

main()
  .catch((error) => {
    console.error('Prisma seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
