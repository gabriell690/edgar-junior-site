export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(234,179,8,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl border border-yellow-500/20" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
              <img
                src="/edgar5.jpg"
                alt="Edgar Junior"
                className="aspect-4/5 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
            </div>

            <div className="border-l border-yellow-400/50 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
                Edgar Junior
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-zinc-300">
                Corretor de Imóveis | Especialista em Lançamentos Imobiliários
              </p>
            </div>

            <h2 className="mt-8 max-w-3xl text-3xl font-light leading-[1.12] text-white md:text-4xl xl:text-5xl">
              Uma das maiores referências da Paraíba em
              <span className="text-yellow-400"> lançamentos imobiliários de médio e alto padrão.</span>
            </h2>

            <div className="mt-9 space-y-5 text-[15px] leading-7 text-zinc-300 md:text-base md:leading-8">
              <p>
                Atua com uma consultoria imobiliária exclusiva para quem busca excelência em cada detalhe.
              </p>

              <p>
                Especialista em lançamentos de condomínios horizontais e verticais, oferece uma consultoria personalizada e estratégica para clientes e investidores que buscam imóveis com grande potencial de valorização, alta rentabilidade e segurança patrimonial.
              </p>

              <p>
                Meu propósito é conectar você às melhores oportunidades do mercado imobiliário premium paraibano, apresentando empreendimentos cuidadosamente selecionados e desenvolvidos por construtoras renomadas, de grande credibilidade e confiança.
              </p>

              <p>
                Cada atendimento é conduzido com discrição e foco na melhor experiência do cliente, pautado pela transparência, segurança, atenção aos detalhes e compromisso com resultados.
              </p>
            </div>

            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="text-lg font-medium leading-8 text-white md:text-xl">
                Conheça o melhor portfólio da Paraíba e descubra o imóvel ideal para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}