import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noindex
      />

      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-2xl flex-col items-center justify-center px-5 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember-500">Erro 404</span>
        <h1 className="mt-4 font-display text-5xl text-bone-100">Esta arena não existe</h1>
        <p className="mt-4 text-bone-300">
          A página que você tentou acessar não foi encontrada. Ela pode ter sido movida ou o
          endereço foi digitado incorretamente.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-bone-100 shadow-ember transition hover:bg-ember-600"
        >
          Voltar para a loja
        </Link>
      </div>
    </>
  );
}
