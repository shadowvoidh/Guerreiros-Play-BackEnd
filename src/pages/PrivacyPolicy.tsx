import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Entenda como o Guerreiros Play, projeto educacional, trata os dados informados no cadastro e login."
        path="/politica-de-privacidade"
      />

      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-3xl text-bone-100">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-bone-500">Última atualização: setembro de 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-bone-300">
          <p>
            Guerreiros Play é um projeto educacional de front-end, sem finalidade comercial. Esta
            página descreve, de forma simples, como as informações digitadas nos formulários de
            cadastro e login são tratadas.
          </p>

          <section>
            <h2 className="font-display text-lg text-bone-100">1. Quais dados são coletados</h2>
            <p className="mt-2">
              Nome de usuário, email e senha, apenas quando você preenche o formulário de
              cadastro. Nenhum outro dado pessoal é solicitado neste projeto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">2. Onde os dados ficam armazenados</h2>
            <p className="mt-2">
              Os dados são salvos apenas no armazenamento local do seu próprio navegador
              (localStorage), nunca em um servidor. Isso significa que ninguém além de quem usa
              este navegador tem acesso a essas informações, e elas são apagadas se o histórico
              do navegador for limpo. A senha nunca é guardada em texto puro: apenas um hash
              criptográfico dela é armazenado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">3. Cookies</h2>
            <p className="mt-2">
              Usamos apenas armazenamento local essencial para lembrar sua preferência de cookies
              e manter o formulário protegido contra reenvios indevidos (token anti-CSRF). Não
              usamos cookies de rastreamento ou publicidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">4. Compartilhamento com terceiros</h2>
            <p className="mt-2">
              Nenhum dado é enviado para servidores externos, redes de anúncio ou terceiros — este
              site não possui backend.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">5. Seus direitos</h2>
            <p className="mt-2">
              Como os dados ficam apenas no seu navegador, você pode removê-los a qualquer momento
              limpando os dados de navegação (cookies e dados de sites) para este endereço.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">6. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre este projeto podem ser enviadas para{" "}
              <a href="mailto:shadow.voidh@gmail.com" className="text-gold-300 hover:underline">
                shadow.voidh@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
