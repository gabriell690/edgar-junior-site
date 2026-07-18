export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-linear-to-b from-yellow-500/10 via-transparent to-transparent" />

        <div className="container-edgar relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-flex rounded-full border border-yellow-500/20 bg-white/5 px-4 py-2 uppercase tracking-[0.3em] text-xs text-yellow-400">
              João Pessoa • PB
            </span>

            <h1 className="mt-8 text-[clamp(3rem,8vw,5.5rem)] font-light leading-none text-white">
              Invista em
              <span className="block font-semibold text-yellow-400">
                João Pessoa
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-zinc-400">
              João Pessoa é uma das capitais que mais cresce no Brasil e
              desponta como um dos mercados imobiliários mais promissores do
              Nordeste. Com praias paradisíacas, excelente qualidade de vida e
              forte valorização imobiliária, a cidade oferece oportunidades
              únicas para morar ou investir com segurança.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}