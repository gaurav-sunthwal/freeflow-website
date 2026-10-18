export const error = (status: number, message: string) => Response.json({ error: message }, { status });

/** Parses a JSON body, rejecting anything larger than `maxBytes`. */
export async function readJSON<T>(request: Request, maxBytes = 16_384): Promise<T | null> {
  const text = await request.text();
  if (text.length > maxBytes) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export const isEmail = (s: unknown): s is string =>
  typeof s === "string" && s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
