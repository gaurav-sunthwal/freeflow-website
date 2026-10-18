import { ensureSchema, sql } from "@/lib/db";
import { userFromRequest } from "@/lib/auth";
import { error, readJSON } from "@/lib/http";

/** Only these fields are stored — aggregate stats and settings, never dictated text or audio. */
const ALLOWED = new Set([
  "version", "lifetimeWords", "lifetimeSeconds", "lifetimeTimedWords", "lifetimeDictations",
  "dayWords", "dayCounts", "daySeconds", "fillerCounts", "dailyGoal", "autoRemoveFillers",
  "dictionary", "snippets",
]);

export async function PUT(request: Request) {
  const uid = userFromRequest(request);
  if (!uid) return error(401, "Please sign in again");
  const body = await readJSON<Record<string, unknown>>(request, 512_000);
  if (!body || typeof body !== "object" || Array.isArray(body)) return error(400, "Invalid stats");
  const data = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.has(k)));

  await ensureSchema();
  await sql`
    INSERT INTO user_stats (user_id, data, updated_at) VALUES (${uid}, ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`;
  return new Response(null, { status: 204 });
}
