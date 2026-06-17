

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-black py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="relative">

            <div
              className="
                absolute
                -inset-4
                rounded-3xl
                bg-linear-to-r
                from-yellow-500/20
                to-transparent
                blur-2xl
              "
            />

            <img
              src="/edgar.jpg"
              alt="Edgar Junior"
              className="
                relative
                rounded-3xl
                w-full
                object-cover
                shadow-2xl
              "
            />

          </div>

          {/* TEXTO */}
          <div>

            <span
              className="
                text-yellow-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Sobre Edgar Junior
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-light
                text-white
                mt-6
                leading-tight
              "
            >
              Atendimento exclusivo para quem busca
              <span className="block text-yellow-400 font-semibold">
                excelência em cada detalhe.
              </span>
            </h2>

            <p
              className="
                text-gray-300
                leading-8
                mt-8
                text-lg
              "
            >
              Edgar Junior atua no mercado imobiliário oferecendo uma
              experiência personalizada para clientes que desejam
              encontrar o imóvel ideal, investir com segurança e
              construir patrimônio de forma inteligente.
            </p>

            <p
              className="
                text-gray-300
                leading-8
                mt-6
                text-lg
              "
            >
              Com foco em imóveis de alto padrão em Campina Grande e
              João Pessoa, seu trabalho é pautado pela transparência,
              atenção aos detalhes e compromisso com resultados.
            </p>

            {/* DIFERENCIAIS */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                ✓ Atendimento Personalizado
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                ✓ Imóveis Exclusivos
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                ✓ Consultoria de Investimentos
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                ✓ Acompanhamento Completo
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
