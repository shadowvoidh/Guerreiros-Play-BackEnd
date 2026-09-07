import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function StickyMobileCTA() {
  const { currentUser } = useAuth();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-void-900/95 p-3 backdrop-blur sm:hidden">
      <Link
        to={currentUser ? "#catalogo" : "/cadastro"}
        className="block w-full rounded-full bg-ember-500 py-3 text-center text-sm font-semibold uppercase tracking-widest text-bone-100 shadow-ember"
      >
        {currentUser ? "Ver catálogo" : "Criar conta grátis"}
      </Link>
    </div>
  );
}
