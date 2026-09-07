/**
 * Security helpers for a client-only demo app.
 *
 * IMPORTANT — read this before reusing this code for a real product:
 * This project has no backend, so there is no SQL database and no
 * server session, which means classic SQL injection and CSRF attacks
 * against a server do not literally apply here. What this file does is
 * apply the *client-side* half of good practice, and every function is
 * commented with what the *server-side* half must also do once a real
 * backend exists. See SECURITY.md for the full checklist.
 */

/**
 * Strips any HTML tags and neutralises characters that could be used to
 * break out of a text node if this value is ever interpolated into HTML
 * (e.g. server-rendered emails, exported reports). React already escapes
 * everything it renders in JSX, so this is a defense-in-depth measure —
 * it is NOT a reason to use dangerouslySetInnerHTML anywhere in the app.
 *
 * Server-side requirement: re-validate and re-sanitize the same field on
 * the server. Never trust that the client already cleaned the input.
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>"'`]/g, (char) => {
      switch (char) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        case "`":
          return "&#96;";
        default:
          return char;
      }
    })
    .trim();
}

/**
 * Hashes a password with SHA-256 before it ever touches storage, so a
 * plaintext password is never written to localStorage.
 *
 * Server-side requirement: this is NOT a substitute for a real password
 * hashing algorithm. A production backend must hash passwords with
 * bcrypt/argon2/scrypt (with a per-user salt and a deliberately slow
 * work factor) — SHA-256 alone is too fast and is used here only because
 * this demo has no backend to do that work.
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

const CSRF_STORAGE_KEY = "gp_csrf_token";

/**
 * Generates (or reuses) a random per-session token and mirrors it into a
 * hidden form field. On a real backend, the server would issue this
 * token, store it against the session, and reject any POST/PUT/DELETE
 * whose form token doesn't match — the classic synchronizer-token CSRF
 * defense. Here, with no server, we still generate and check the token
 * client-side so the form's shape and validation logic are already in
 * place for when a backend is added, and to make sure the token is never
 * silently skipped.
 */
export function getOrCreateCsrfToken(): string {
  let token = sessionStorage.getItem(CSRF_STORAGE_KEY);
  if (!token) {
    token = crypto.randomUUID();
    sessionStorage.setItem(CSRF_STORAGE_KEY, token);
  }
  return token;
}

export function isCsrfTokenValid(submittedToken: string): boolean {
  const expected = sessionStorage.getItem(CSRF_STORAGE_KEY);
  return Boolean(expected) && submittedToken === expected;
}

/**
 * A basic client-side rate limiter for the login form, to slow down
 * naive brute-force attempts from the same browser. This is easily
 * bypassed by clearing storage or using a different browser, so it is
 * a UX speed bump, not a security boundary.
 *
 * Server-side requirement: real throttling/lockout must be enforced by
 * the server (per account and per IP), since the client can't be trusted.
 */
const ATTEMPTS_KEY = "gp_login_attempts";
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60_000;

export function registerFailedLoginAttempt(): { locked: boolean; retryAfterMs: number } {
  const raw = sessionStorage.getItem(ATTEMPTS_KEY);
  const parsed = raw ? (JSON.parse(raw) as { count: number; firstAttemptAt: number }) : null;
  const now = Date.now();

  if (!parsed || now - parsed.firstAttemptAt > LOCKOUT_MS) {
    sessionStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count: 1, firstAttemptAt: now }));
    return { locked: false, retryAfterMs: 0 };
  }

  const count = parsed.count + 1;
  sessionStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count, firstAttemptAt: parsed.firstAttemptAt }));

  if (count >= MAX_ATTEMPTS) {
    return { locked: true, retryAfterMs: LOCKOUT_MS - (now - parsed.firstAttemptAt) };
  }
  return { locked: false, retryAfterMs: 0 };
}

export function clearLoginAttempts(): void {
  sessionStorage.removeItem(ATTEMPTS_KEY);
}
