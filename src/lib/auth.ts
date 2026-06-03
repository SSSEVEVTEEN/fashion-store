import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// In-memory user store for demo (replace with DB in production)
const users: { id: string; name: string; email: string; password: string }[] = [];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "邮箱", type: "email" },
        password: { label: "密码", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
        const user = users.find((u) => u.email === email);
        if (!user) return null;
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET || "fashion-store-secret-key-change-in-production",
});

export async function registerUser(name: string, email: string, password: string) {
  if (users.find((u) => u.email === email)) {
    throw new Error("该邮箱已被注册");
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), name, email, password: hashed };
  users.push(user);
  return { id: user.id, name: user.name, email: user.email };
}
