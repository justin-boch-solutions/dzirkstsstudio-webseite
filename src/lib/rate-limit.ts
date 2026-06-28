type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

export const rateLimit = {
  check(ip: string): { success: boolean } {
    const now = Date.now();
    const entry = store.get(ip);

    if (!entry || now > entry.resetAt) {
      store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
      return { success: true };
    }

    if (entry.count >= MAX_REQUESTS) {
      return { success: false };
    }

    entry.count += 1;
    return { success: true };
  },
};

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
