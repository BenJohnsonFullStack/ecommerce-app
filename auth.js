import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get user from db
const getUser = async (email) => {
  try {
    const user = await prisma.findOne(email);
    return user;
  } catch (err) {
    console.error("Failed to get user", err);
    throw new Error("Failed to get user.");
  }
};
