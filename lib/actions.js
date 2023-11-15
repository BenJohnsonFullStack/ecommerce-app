"use server";

import { signIn } from "@/auth";

const authenticate = async (prevState, formData) => {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw err;
  }
};

export { authenticate };
