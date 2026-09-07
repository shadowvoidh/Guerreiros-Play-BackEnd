import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { StoredUser } from "@/types";
import { hashPassword, sanitizeText, registerFailedLoginAttempt, clearLoginAttempts } from "@/lib/security";

const USER_KEY_PREFIX = "gp_user:";

interface AuthContextValue {
  currentUser: StoredUser | null;
  cadastrar: (nome: string, email: string, senha: string) => Promise<{ ok: boolean; error?: string }>;
  login: (email: string, senha: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<StoredUser | null>(null);

  const cadastrar = async (nome: string, email: string, senha: string) => {
    const cleanNome = sanitizeText(nome);
    const cleanEmail = email.trim().toLowerCase();
    const storageKey = USER_KEY_PREFIX + cleanEmail;

    // NOTE: in a real backend this uniqueness check and the write itself
    // must happen server-side (with a unique constraint on the email
    // column), since two browser tabs racing this check is a real bug
    // waiting to happen for a client-only demo like this one.
    if (localStorage.getItem(storageKey)) {
      return { ok: false, error: "Já existe uma conta com esse email." };
    }

    const passwordHash = await hashPassword(senha);
    const user: StoredUser = { nome: cleanNome, email: cleanEmail, passwordHash };
    localStorage.setItem(storageKey, JSON.stringify(user));
    return { ok: true };
  };

  const login = async (email: string, senha: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const storageKey = USER_KEY_PREFIX + cleanEmail;
    const raw = localStorage.getItem(storageKey);

    // Generic error message on purpose: never reveal whether the email
    // exists or the password was wrong — that distinction is exactly what
    // lets an attacker enumerate valid accounts.
    const genericError = "Email ou senha incorretos.";

    if (!raw) {
      registerFailedLoginAttempt();
      return { ok: false, error: genericError };
    }

    const stored = JSON.parse(raw) as StoredUser;
    const attemptHash = await hashPassword(senha);

    if (attemptHash !== stored.passwordHash) {
      const { locked, retryAfterMs } = registerFailedLoginAttempt();
      if (locked) {
        const seconds = Math.ceil(retryAfterMs / 1000);
        return { ok: false, error: `Muitas tentativas. Tente novamente em ${seconds}s.` };
      }
      return { ok: false, error: genericError };
    }

    clearLoginAttempts();
    setCurrentUser(stored);
    return { ok: true };
  };

  const logout = () => setCurrentUser(null);

  const value = useMemo(() => ({ currentUser, cadastrar, login, logout }), [currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
