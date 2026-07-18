export default function MapSection() {
    return (
        <>
            {/* mapa */}
            <section className="pb-32 px-6">
        <div className="container-edgar">

          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">

           <div className="flex justify-center">

  <div className="relative group w-full max-w-155">

    {/* Glow */}
    <div className="absolute -inset-4 rounded-[40px] bg-yellow-500/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

    {/* Cantos decorativos */}
    <div className="absolute -top-5 -left-5 h-14 w-14 border-l-4 border-t-4 border-yellow-500 rounded-tl-2xl"></div>

    <div className="absolute -bottom-5 -right-5 h-14 w-14 border-r-4 border-b-4 border-yellow-500 rounded-br-2xl"></div>

    {/* Moldura */}
    <div className="relative overflow-hidden rounded-4xl border-2 border-yellow-500 bg-zinc-900 p-3 shadow-[0_20px_60px_rgba(234,179,8,0.15)]">

      <img
        src="/joao-pessoa-mapa.webp"
        alt="João Pessoa"
        className="h-107.5 w-full rounded-3xl object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Selo */}
      <div className="absolute left-8 top-8 rounded-full bg-yellow-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.30em] text-black shadow-lg">
        João Pessoa
      </div>

      {/* Gradiente inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

    </div>

  </div>

</div>

           <div className="mx-auto max-w-3xl text-center">

  <span className="uppercase tracking-[0.35em] text-xs text-yellow-400">
    INVESTIMENTO INTELIGENTE
  </span>

  <h2 className="mt-6 text-5xl font-light text-white">
    A capital com um dos maiores potenciais de valorização do Nordeste
  </h2>

  <p className="mt-6 text-lg leading-9 text-zinc-400">
    Regiões como Altiplano, Cabo Branco, Bessa, Jardim Oceania,
    Aeroclube e Manaíra concentram alguns dos empreendimentos mais
    desejados da cidade, reunindo infraestrutura completa, turismo,
    lazer e excelente liquidez para investidores.
  </p>

</div>

          </div>

        </div>
      </section>
        </>
    )
}