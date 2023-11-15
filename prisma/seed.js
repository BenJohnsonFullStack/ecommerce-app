const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const main = async () => {
  let password = "123456";
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  const user = await prisma.user.upsert({
    where: {
      email: "test@test.com",
    },
    update: {},
    create: {
      email: "test@test.com",
      password: password,
    },
  });
  console.log(user);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
