import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

  console.log("Reset database...");

  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "Task", "User" RESTART IDENTITY CASCADE;
  `);

  console.log("Start seeding...");

  const users = [];

  for (let i = 0; i < 20; i++) {

    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: hashedPassword
      }
    });

    users.push(user);
  }

  const statuses = ["todo", "in-progress", "done"];

  for (const user of users) {

    for (let i = 0; i < 10; i++) {

      await prisma.task.create({
        data: {
          title: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          status: statuses[Math.floor(Math.random() * 3)],
          userId: user.id
        }
      });

    }

  }

  console.log("Seed finished");

}

main()
.finally(async () => {
  await prisma.$disconnect();
});