import { ensureSchema, sql } from "@/lib/db";
import { hashPassword, signToken } from "@/lib/auth";
import { error, isEmail, readJSON } from "@/lib/http";

export async function POST(request: Request) {
  const body = await readJSON<{ name?: unknown; email?: unknown; password?: unknown }>(request);
  if (!body) return error(400, "Invalid request");
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
  const email = isEmail(body.email) ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!name) return error(400, "Please enter your name");
  if (!email) return error(400, "Please enter a valid email");
  if (password.length < 8 || password.length > 200) return error(400, "Password must be at least 8 characters");

  await ensureSchema();
  const hash = await hashPassword(password);
  const rows = await sql`
    INSERT INTO users (email, name, password_hash) VALUES (${email}, ${name}, ${hash})
    ON CONFLICT (email) DO NOTHING
    RETURNING id, name, email`;
  if (rows.length === 0) return error(409, "An account with this email already exists");
  const user = rows[0];
  return Response.json({ token: signToken(user.id), user: { name: user.name, email: user.email } }, { status: 201 });
}
