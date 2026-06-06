import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 250000,
        rating: 4.9,
        placements: 95,
        description: "Premier engineering institute",
      },
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 240000,
        rating: 4.8,
        placements: 94,
        description: "Top engineering college",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        placements: 92,
        description: "Best NIT in India",
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });