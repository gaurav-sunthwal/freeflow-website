import { ensureSchema, sql } from "@/lib/db";
import { userFromRequest } from "@/lib/auth";
import { error } from "@/lib/http";

/** Profile + backed-up stats for the signed-in user. */
export async function GET(request: Request) {
  const uid = userFromRequest(request);
  if (!uid) return error(401, "Please sign in again");
  await ensureSchema();
  const rows = await sql`
    SELECT u.name, u.email, s.data, s.updated_at
    FROM users u LEFT JOIN user_stats s ON s.user_id = u.id
    WHERE u.id = ${uid}`;
  if (rows.length === 0) return error(401, "Account not found");
  const r = rows[0];
  return Response.json({ user: { name: r.name, email: r.email }, stats: r.data ?? null, updatedAt: r.updated_at });
}

/** Deletes the account and all its data. */
export async function DELETE(request: Request) {
  const uid = userFromRequest(request);
  if (!uid) return error(401, "Please sign in again");
  await ensureSchema();
  await sql`DELETE FROM users WHERE id = ${uid}`;
  return new Response(null, { status: 204 });
}
