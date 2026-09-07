import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Termos de Uso"
        description="Termos de uso do Guerreiros Play, projeto educacional de vitrine de jogos sem checkout real."
        path="/termos-de-uso"
      />

      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-3xl text-bone-100">Termos de Uso</h1>
        <p className="mt-2 text-sm text-bone-500">Última atualização: setembro de 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-bone-300">
          <section>
            <h2 className="font-display text-lg text-bone-100">1. Sobre o site</h2>
            <p className="mt-2">
              Guerreiros Play é um projeto educacional de front-end. Os jogos, preços, imagens e
              descrições exibidos são fictícios ou meramente ilustrativos, e não há qualquer
              processo real de compra, pagamento ou entrega de produto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">2. Cadastro e conta</h2>
            <p className="mt-2">
              O cadastro é opcional e serve apenas para demonstrar um fluxo de login. As contas
              criadas existem somente no navegador utilizado e podem ser removidas a qualquer
              momento limpando os dados do site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">3. Uso adequado</h2>
            <p className="mt-2">
              Ao usar este site, você concorda em não tentar explorar vulnerabilidades, enviar
              conteúdo malicioso pelos formulários ou usar o projeto para fins diferentes do
              estudo e demonstração de front-end.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">4. Isenção de responsabilidade</h2>
            <p className="mt-2">
              O site é fornecido "como está", sem garantias, e não deve ser usado como base para
              decisões de compra reais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-bone-100">5. Alterações</h2>
            <p className="mt-2">
              Estes termos podem ser atualizados a qualquer momento, refletindo mudanças no
              propósito educacional do projeto.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
