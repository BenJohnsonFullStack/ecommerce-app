import { prisma } from "@/lib/prisma";

export const POST = async (req) => {
  try {
    const newUser = await req.json();

    const user = await prisma.user.upsert({
      where: {
        email: newUser.email,
      },
      update: {},
      create: newUser,
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify(err.message), { status: 500 });
  }
};
