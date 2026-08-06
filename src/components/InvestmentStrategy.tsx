export default function InvestmentStrategy() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-zinc-950 via-black to-zinc-950 py-28">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.06),transparent_70%)]" />

      <div className="container-edgar relative z-10 px-6 lg:px-10">

       <div className="
max-w-7xl
mx-auto
grid
grid-cols-1
lg:grid-cols-2
items-center
gap-16
xl:gap-24
">

          {/* TEXTO */}

          <div>

            <span className="uppercase tracking-[0.35em] text-xs text-yellow-400">
              CONSULTORIA ESTRATÉGICA
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl leading-tight font-light text-white">
              Seu patrimônio merece
              <span className="block font-medium text-yellow-400">
                uma estratégia.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
               Decisões patrimoniais inteligentes exigem visão de mercado,
               análise criteriosa e uma compreensão profunda do potencial de
               valorização, liquidez e crescimento de cada oportunidade.
             </p>

             <p className="mt-6 text-lg leading-9 text-zinc-400">
               Unimos experiência, estudos de cada região, dados de mercado e
               uma análise estratégica personalizada para identificar ativos
               imobiliários com alto potencial de valorização.
             </p>

             <p className="mt-6 text-lg leading-9 text-zinc-400">
               Mais do que apresentar imóveis, construímos estratégias
               patrimoniais capazes de transformar escolhas imobiliárias em
               investimentos sólidos para o futuro.
             </p>

             <div className="mt-8 border-l-2 border-yellow-500 pl-5">
               <p className="text-lg font-medium leading-8 text-white">
                 Cada imóvel possui uma história. Cada cliente possui um objetivo.
               </p>
               <p className="mt-2 text-base leading-7 text-zinc-400">
                 Unimos ambos com precisão e análise de mercado,
                 transformando-os em grandes oportunidades.
               </p>
             </div>

            {/* Cards */}

            <div className="grid sm:grid-cols-2 gap-5 mt-12">

            </div>
          </div>

          {/* FOTO */}

          <div className="flex justify-center">

            <div className="relative group w-full max-w-130">

              <div className="absolute -inset-4 rounded-[36px] bg-yellow-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100"></div>

              <div className="absolute -left-4 -top-4 h-14 w-14 border-l-[3px] border-t-[3px] border-yellow-500 rounded-tl-2xl"></div>

              <div className="absolute -right-4 -bottom-4 h-14 w-14 border-r-[3px] border-b-[3px] border-yellow-500 rounded-br-2xl"></div>

              <div className="overflow-hidden rounded-[30px] border border-yellow-500 bg-zinc-950 p-3 shadow-[0_0_45px_rgba(234,179,8,.12)]">

                <img
                  src="/edgar4.jpg"
                  alt="Consultoria Imobiliária"
                  className="h-155 w-full rounded-[22px] object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}