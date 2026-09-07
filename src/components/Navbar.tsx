import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors hover:text-gold-300 ${
      isActive ? "text-gold-300" : "text-bone-300"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-void-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/img/logo.svg" alt="Guerreiros Play" className="h-9 w-auto" />
          <span className="font-display text-lg text-bone-100">Guerreiros Play</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Navegação principal">
          <NavLink to="/" end className={linkClass}>
            Loja
          </NavLink>
          {currentUser ? (
            <button onClick={logout} className="!border-0 !bg-transparent !p-0 text-sm text-bone-300 hover:text-ember-400">
              Sair ({currentUser.nome})
            </button>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <NavLink
                to="/cadastro"
                className="rounded-full bg-ember-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bone-100 shadow-ember transition hover:bg-ember-600"
              >
                Criar conta
              </NavLink>
            </>
          )}
        </nav>

        {/* Ação compacta para telas pequenas, para que Login/Cadastro não
            dependam apenas do menu completo ou do rodapé */}
        <nav className="flex items-center gap-3 sm:hidden" aria-label="Navegação principal (mobile)">
          {currentUser ? (
            <button onClick={logout} className="!border-0 !bg-transparent !p-0 text-xs text-bone-300">
              Sair
            </button>
          ) : (
            <Link to="/login" className="text-xs font-semibold uppercase tracking-wide text-gold-300">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
