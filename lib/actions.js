"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

const createAccount = async (prevState, formData) => {
  const parsedCredentials = z
    .object({
      email: z.string().email(),
      password: z.string().min(6),
    })
    .safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

  // if types are valid, get the data
  if (parsedCredentials.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Account.",
    };
  }

  let { email, password } = parsedCredentials.data;
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  try {
    await prisma.user.upsert({
      where: {
        email: email,
      },
      update: {},
      create: {
        email: email,
        password: password,
      },
    });
  } catch (err) {
    return { message: "Database Error: Failed to Create User" };
  }
};

const authenticate = async (prevState, formData) => {
  try {
    await signIn("credentials", Object.fromEntries(formData));
    redirect("/store");
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw err;
  }
};

export { authenticate, createAccount };
