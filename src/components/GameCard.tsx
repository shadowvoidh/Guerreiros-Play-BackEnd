import { Link } from "react-router-dom";
import type { Game } from "@/types";

const categoryStyles: Record<Game["category"], string> = {
  Luta: "bg-ember-500/15 text-ember-400 border-ember-500/40",
  Ação: "bg-orange-500/15 text-orange-300 border-orange-500/40",
  Aventura: "bg-purple-500/15 text-purple-300 border-purple-500/40",
  Estratégia: "bg-blue-500/15 text-blue-300 border-blue-500/40",
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-void-800 shadow-deep transition-transform hover:-translate-y-1">
      <div className="aspect-[16/9] w-full overflow-hidden bg-void-700">
        <img
          src={game.coverImage}
          alt={`Capa do jogo ${game.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
          width={640}
          height={360}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={`w-fit rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${categoryStyles[game.category]}`}
        >
          {game.category}
        </span>

        <h3 className="font-display text-lg text-bone-100">{game.title}</h3>
        <p className="line-clamp-3 text-sm text-bone-300">{game.shortDescription}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-mono text-base text-gold-300">
            {game.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
          <Link
            to={`/jogo/${game.slug}`}
            className="rounded-full border border-gold-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold-300 transition hover:bg-gold-400 hover:text-void-950"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
