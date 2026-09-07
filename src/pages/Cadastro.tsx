import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import FormField from "@/components/FormField";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import { validateCadastroForm, hasErrors } from "@/lib/validation";
import { getOrCreateCsrfToken, isCsrfTokenValid } from "@/lib/security";
import type { FormErrors } from "@/types";

export default function Cadastro() {
  const { cadastrar } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const csrfToken = getOrCreateCsrfToken();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    const submittedToken = new FormData(event.currentTarget).get("csrf_token");
    if (typeof submittedToken !== "string" || !isCsrfTokenValid(submittedToken)) {
      setFormError("Sessão de formulário expirada. Recarregue a página e tente novamente.");
      return;
    }

    const validationErrors = validateCadastroForm(nome, email, senha, confirmarSenha);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    setLoading(true);
    const result = await cadastrar(nome, email, senha);
    setLoading(false);

    if (!result.ok) {
      setFormError(result.error ?? "Não foi possível criar a conta.");
      return;
    }

    navigate("/login");
  };

  return (
    <>
      <SEO
        title="Cadastro"
        description="Crie sua conta gratuita na Guerreiros Play e acesse o catálogo de jogos de luta e ação."
        path="/cadastro"
      />

      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl items-center justify-center px-5 py-12">
        <div className="grid w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-void-800 shadow-deep lg:grid-cols-2">
          <div className="hidden bg-void-700 lg:block">
            <img
              src="/assets/img/ultimate-fight.png"
              alt="Arte do jogo Ultimate Fight"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center px-6 py-10 sm:px-10">
            <img src="/assets/img/logo.png" alt="Guerreiros Play" className="h-16 w-auto" />
            <h1 className="mt-4 text-center text-3xl font-bold uppercase tracking-wide text-bone-100">
              Cadastro
            </h1>

            <form className="mt-8 flex w-full flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="csrf_token" value={csrfToken} readOnly />

              <FormField
                id="cadastro-nome"
                icon="👤"
                type="text"
                placeholder="Nome de Usuário"
                autoComplete="username"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                error={errors.nome}
              />
              <FormField
                id="cadastro-email"
                icon="✉"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <FormField
                id="cadastro-senha"
                icon="🔒"
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                error={errors.senha}
              />
              <FormField
                id="cadastro-confirmar"
                icon="🔒"
                type="password"
                placeholder="Confirmar Senha"
                autoComplete="new-password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                error={errors.confirmarSenha}
              />

              {formError && (
                <p className="rounded-md border border-ember-500/40 bg-ember-500/10 px-3 py-2 text-sm text-ember-400" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ember-500 py-3 text-sm font-semibold uppercase tracking-widest text-bone-100 shadow-ember transition hover:bg-ember-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? <LoadingSpinner label="Criando conta…" /> : "Cadastro"}
              </button>
            </form>

            <p className="mt-6 font-mono text-xs text-bone-300">
              Possui conta?{" "}
              <Link to="/login" className="text-blue-300 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
