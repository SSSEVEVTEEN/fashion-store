import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "请填写所有字段" }, { status: 400 });
    }
    const user = await registerUser(name, email, password);
    return NextResponse.json({ user });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "注册失败";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
