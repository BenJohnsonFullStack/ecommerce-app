// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";
// import Credentials from "next-auth/providers/credentials";
// import { z } from "zod";
// import bcrypt from "bcrypt";
// import { prisma } from "./lib/prisma";

// // get user from db
// const getUser = async (email) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });
//     return user;
//   } catch (err) {
//     console.error("Failed to get user", err);
//     throw new Error("Failed to get user.");
//   }
// };

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       // validate credential types
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({
//             email: z.string().email(),
//             password: z.string().min(6),
//           })
//           .safeParse(credentials);

//         // if types are valid, get the data
//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data;

//           // get user from db based on credentials
//           const user = await getUser(email);

//           // if no user is found, return null
//           if (!user) return null;

//           // if user is found, compare password with hash
//           const passwordMatches = await bcrypt.compare(password, user.password);

//           // if passwords match return user
//           if (passwordMatches) return user;
//         }

//         // deny login
//         return null;
//       },
//     }),
//   ],
// });
