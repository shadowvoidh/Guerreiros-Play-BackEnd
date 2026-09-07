import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import GameCard from "@/components/GameCard";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { games } from "@/data/games";
import type { GameCategory } from "@/types";

const categories: Array<GameCategory | "Todos"> = ["Todos", "Luta", "Ação", "Aventura", "Estratégia"];

export default function Home() {
  // Estado de navegação entre Páginas (1 ou 2)
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<GameCategory | "Todos">("Todos");

  const filteredGames = useMemo(
    () => (activeCategory === "Todos" ? games : games.filter((game) => game.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <SEO
        title={currentPage === 1 ? "Catálogo Escolar" : "Jogos Disponíveis"}
        description="Explore o catálogo Guerreiros Play: jogos de luta, ação, aventura e estratégia com fotos, descrição e preço de cada título."
        path="/"
      />

   

      {/* PÁGINA 1: Catálogo Escolar de Jogos (Hero / Apresentação) */}
      {currentPage === 1 && (
        <section className="border-b border-white/10 animate-fade-in">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
                Catálogo escolar de jogos
              </span>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-bone-100 sm:text-5xl">
                Guerreiros Play
              </h1>
              <p className="mt-4 max-w-md text-base text-bone-300">
                Um projeto de estudo que reúne jogos de luta, ação, aventura e estratégia <br></br> cada um
                com fotos, descrição e preço, como uma vitrine de loja de jogos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setCurrentPage(2)}
                  className="rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-bone-100 shadow-ember transition hover:bg-ember-600"
                >
                  Ver catálogo  →
                </button>
                <Link
                  to="/cadastro"
                  className="rounded-full border border-gold-400/60 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-gold-300 transition hover:bg-gold-400 hover:text-void-950"
                >
                  Criar conta grátis
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {games.slice(0, 4).map((game) => (
                <div key={game.slug} className="overflow-hidden rounded-lg border border-white/10 shadow-deep">
                  <img
                    src={game.coverImage}
                    alt={`Cena do jogo ${game.title}`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PÁGINA 2: Jogos Disponíveis (Grid de Jogos + Filtros) */}
      {currentPage === 2 && (
        <section className="mx-auto max-w-6xl px-5 py-14 animate-fade-in">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <button
                onClick={() => setCurrentPage(1)}
                className="mb-2 font-mono text-xs text-gold-300 hover:underline flex items-center gap-1"
              >
                ← Voltar para Página 1
              </button>
              <h2 className="font-display text-2xl text-bone-100">Jogos disponíveis</h2>
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition ${
                    activeCategory === category
                      ? "border-gold-400 bg-gold-400 text-void-950"
                      : "border-white/15 text-bone-300 hover:border-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 sm:pb-0">
            {filteredGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      )}


      <StickyMobileCTA />
    </>
  );
}