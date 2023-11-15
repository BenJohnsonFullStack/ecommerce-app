"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

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

export { authenticate };
