import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "gp_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-void-900/95 px-5 py-4 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-bone-300">
          Usamos cookies essenciais para manter sua sessão de estudo funcionando. Veja detalhes na{" "}
          <Link to="/politica-de-privacidade" className="text-gold-300 underline hover:text-gold-400">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => respond("declined")}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bone-300 hover:border-white/40"
          >
            Recusar
          </button>
          <button
            onClick={() => respond("accepted")}
            className="rounded-full bg-gold-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-void-950 hover:bg-gold-300"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
