import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { getGameBySlug } from "@/data/games";

export default function GameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug);

  if (!game) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={game.title}
        description={game.shortDescription}
        path={`/jogo/${game.slug}`}
        image={game.coverImage}
      />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-void-800 shadow-deep lg:grid-cols-2">
          <div className="bg-void-700">
            <img
              src={game.bannerImage}
              alt={`Arte promocional do jogo ${game.title}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col bg-void-700/40 p-8 lg:p-10">
            <h1 className="font-display text-2xl text-bone-100 lg:text-3xl">{game.title}</h1>

            <div className="mt-4 max-h-80 space-y-4 overflow-y-auto pr-2 text-sm leading-relaxed text-bone-300">
              {game.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-8">
              <span className="font-mono text-2xl text-gold-300">
                {game.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
              <span className="font-mono text-xs text-bone-500">Vitrine educacional — sem compra real</span>
            </div>

            <Link to="/" className="mt-6 text-sm text-blue-300 hover:underline">
              Voltar para a loja
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
