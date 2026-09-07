import type { Game } from "@/types";

export const games: Game[] = [
  {
    slug: "ultimate-fight",
    title: "Guerreiros Play: Ultimate Fight",
    category: "Luta",
    price: 89.9,
    coverImage: "/assets/img/ultimate-fight.png",
    bannerImage: "/assets/img/ultimate-fight.png",
    shortDescription:
      "Um jogo de luta competitivo onde os maiores guerreiros de diferentes eras se enfrentam pelo título de campeão da Arena Suprema.",
    longDescription: [
      "Guerreiros Play: Ultimate Fight é um jogo de luta competitivo onde os maiores guerreiros de diferentes eras, reinos e dimensões se enfrentam para provar quem é o verdadeiro campeão da Arena Suprema.",
      "Domine estilos de combate únicos, execute combos devastadores e desperte habilidades especiais capazes de virar uma luta nos momentos mais críticos. Cada personagem possui uma história própria, golpes exclusivos e um poderoso golpe final conhecido como Ultimate Impact.",
    ],
  },
  {
    slug: "eclipse-das-almas",
    title: "Guerreiros Play: Eclipse das Almas",
    category: "Aventura",
    price: 74.9,
    coverImage: "/assets/img/eclipse-das-almas.png",
    bannerImage: "/assets/img/eclipse-das-almas.png",
    shortDescription:
      "Quando o Eclipse Carmesim cobriu os céus, reis enlouqueceram e heróis foram corrompidos. Restaure a luz ao mundo de Valdrath.",
    longDescription: [
      "Quando o Eclipse Carmesim cobriu os céus, o equilíbrio do mundo foi destruído. Reis enlouqueceram, heróis foram corrompidos e criaturas ancestrais despertaram das profundezas da escuridão. O reino de Valdrath caiu, deixando para trás apenas ruínas, cinzas e almas condenadas.",
      "Você é um dos últimos Guerreiros da Chama, um combatente marcado pelo eclipse e destinado a enfrentar os Senhores das Almas, seres poderosos que governam as terras devastadas. Para restaurar a luz ao mundo, será necessário atravessar castelos esquecidos, cemitérios amaldiçoados, cidades destruídas e fortalezas dominadas pela corrupção.",
      "Cada vitória o tornará mais forte, mas cada derrota o aproximará da loucura. Em um mundo onde a morte é apenas mais um obstáculo, somente os verdadeiros guerreiros conseguirão sobreviver aos horrores do Eclipse.",
    ],
  },
  {
    slug: "furia-do-dragao",
    title: "Guerreiros Play: Fúria do Dragão",
    category: "Ação",
    price: 69.9,
    coverImage: "/assets/img/furia-do-dragao.png",
    bannerImage: "/assets/img/furia-do-dragao.png",
    shortDescription:
      "Um jogo de ação frenético em terceira pessoa: incorpore um caçador de dragões e enfrente hordas de criaturas em cenários devastados.",
    longDescription: [
      "Fúria do Dragão coloca você no papel de um caçador de elite enviado para conter criaturas dracônicas que despertaram após séculos de sono. A ação é rápida, direta e recompensa quem estuda o padrão de cada inimigo.",
      "Combine ataques corpo a corpo com habilidades elementais para encadear combos e derrubar chefes gigantescos que ocupam a tela inteira. Cada fase termina em um confronto contra um dragão único, com mecânicas próprias.",
    ],
  },
  {
    slug: "reino-partido",
    title: "Guerreiros Play: Reino Partido",
    category: "Estratégia",
    price: 59.9,
    coverImage: "/assets/img/reino-partido.png",
    bannerImage: "/assets/img/reino-partido.png",
    shortDescription:
      "Duas facções, um único trono. Recrute guerreiros, planeje batalhas em turnos e decida o destino do Reino Partido.",
    longDescription: [
      "Reino Partido é um jogo de estratégia por turnos ambientado numa guerra civil entre duas facções que disputam o trono. Cada decisão de recrutamento e posicionamento afeta o resultado das batalhas seguintes.",
      "Construa seu exército de guerreiros com habilidades complementares, gerencie recursos entre as batalhas e escolha entre diplomacia ou conquista para reunificar o reino.",
    ],
  },
];

export function getGameBySlug(slug: string | undefined): Game | undefined {
  return games.find((game) => game.slug === slug);
}
