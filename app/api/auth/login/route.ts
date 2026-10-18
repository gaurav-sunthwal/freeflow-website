import { ensureSchema, sql } from "@/lib/db";
import { signToken, verifyPassword } from "@/lib/auth";
import { error, readJSON } from "@/lib/http";

export async function POST(request: Request) {
  const body = await readJSON<{ email?: unknown; password?: unknown }>(request);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password) return error(400, "Enter your email and password");

  await ensureSchema();
  const rows = await sql`SELECT id, name, email, password_hash FROM users WHERE email = ${email}`;
  const user = rows[0];
  // Same message either way, so emails can't be probed.
  if (!user || !(await verifyPassword(password, user.password_hash))) return error(401, "Wrong email or password");
  return Response.json({ token: signToken(user.id), user: { name: user.name, email: user.email } });
}
