export type GameCategory = "Luta" | "Ação" | "Aventura" | "Estratégia";

export interface Game {
  slug: string;
  title: string;
  category: GameCategory;
  price: number;
  coverImage: string;
  bannerImage: string;
  shortDescription: string;
  longDescription: string[];
}

export interface StoredUser {
  nome: string;
  email: string;
  /** SHA-256 hex digest — the password itself is never stored. */
  passwordHash: string;
}

export interface FormErrors {
  [field: string]: string | undefined;
}
