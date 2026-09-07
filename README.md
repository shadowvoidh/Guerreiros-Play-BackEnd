# 🎮 Guerreiros Play — Trabalho Front-End

Este trabalho é feito apenas para estudo de **Front-end** (React + TypeScript + Tailwind CSS). É uma vitrine de jogos fictícia, sem checkout real e sem processamento de pagamento.

> ⚠️ **AVISO DE SEGURANÇA IMPORTANTE**
> **POR MOTIVOS DE SEGURANÇA, NUNCA UTILIZE A MESMA SENHA DO SEU GMAIL OU DE OUTRAS CONTAS PESSOAIS REAIS NESTE SITE.**
> As contas de Login/Cadastro são salvas apenas no `localStorage` do seu próprio navegador (não existe banco de dados nem servidor). A senha nunca é guardada em texto puro — antes de ser salva, ela passa por um hash criptográfico SHA-256. Ainda assim, este é um projeto de estudo: use sempre senhas fictícias e exclusivas para teste.
>
> Recomendação: use `@guest.com` para criar contas de teste — exemplo: `exemplo@guest.com`

---

👉 **[CLIQUE AQUI PARA ACESSAR](https://guerreirosplay.netlify.app/)**

---

## 🚀 Tecnologias Utilizadas

* **Frontend:** React, TypeScript, Tailwind CSS, React Router, Vite
* **Hospedagem:** Netlify
* **Sem backend:** cadastro e login funcionam 100% no navegador (`localStorage`), sem servidor nem banco de dados real

## Trabalho feito por:

# Pedro Carnio (Responsável por criar o sistema Front-end)
# Luiz Felipe (Responsável pelo Design no Figma)
# Jonatan Natan (Responsável pela Modelagem — Diagrama de "caso de uso", "classes" e "atores do sistema")

---

## ✅ Funcionalidades

* Tela de Login e Tela de Cadastro, com validação e mensagens de erro por campo
* Tela de Loja com 4 jogos (categorias: Luta, Ação, Aventura, Estratégia), cada um com foto, descrição e preço
* Filtro de jogos por categoria
* Página de detalhes de cada jogo
* Página 404 personalizada
* Política de Privacidade e Termos de Uso
* Banner de cookies
* CTA fixo no mobile e CTA acima da dobra na página inicial
* SEO por página (título, descrição, imagem de compartilhamento, sitemap.xml, robots.txt)

Mais detalhes de segurança (sanitização de input, token CSRF, headers HTTP) estão documentados em [`SECURITY.md`](./SECURITY.md).

---

## 📁 Estrutura do Projeto

```text
guerreiros-play/
├── public/
│   ├── assets/img/          # Logos e artes dos jogos (Eclipse, Ultimate Fight, etc.)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg / .ico
│   └── og-image.png         # Imagem de compartilhamento (Open Graph)
├── src/
│   ├── components/          # Navbar, Footer, GameCard, FormField, CookieBanner...
│   ├── context/
│   │   └── AuthContext.tsx  # Login e Cadastro via localStorage (senha com hash SHA-256)
│   ├── data/
│   │   └── games.ts         # Catálogo de jogos (foto, descrição, preço, categoria)
│   ├── lib/
│   │   ├── security.ts      # Sanitização, hash de senha, token CSRF, rate limit
│   │   └── validation.ts    # Validação de formulários
│   ├── pages/                # Home, Login, Cadastro, GameDetail, 404, Privacidade, Termos
│   ├── App.tsx                # Rotas
│   └── main.tsx                # Entrypoint (Router + AuthProvider)
├── netlify.toml               # Headers de segurança + redirect de SPA
├── SECURITY.md                 # Detalhamento de cada proteção implementada
└── README.md                   # Este arquivo
```



## 🌘Autor
* *Shadow_Voidh:* [Github](https://github.com/shadowvoidh)

## 📬 Contato
* *GitHub:* [@shadowvoidh](https://github.com/shadowvoidh)
* *Instagram:* [@shadow_voidh](https://www.instagram.com/shadow_voidh/)
* *LinkedIn:* [Pedro Carnio](https://linkedin.com/in/pedrocarnio)
* *Discord:* shadow_voidh
* *E-mail:* shadow.voidh@gmail.com
