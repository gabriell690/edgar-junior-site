import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PropertyFilters from "../components/joaopessoa/PropertyFilters";
import Layout from "../components/Layout";
import { properties } from "../data/properties";
import MarketTickerCG from "../components/market/MarketTickerCG";

export default function CampinaGrande() {
  const [tipo, setTipo] = useState("Todos");
  const [bairroSelecionado, setBairroSelecionado] = useState("Todos");
const [busca, setBusca] = useState("");
const [categoria, setCategoria] = useState("Todos");

  const campinaProperties = useMemo(
    () =>
      properties.filter((property) =>
        property.location
          .toLowerCase()
          .includes("campina grande")
      ),
    []
  );

  const bairros = [
    "Todos",
    ...new Set(campinaProperties.map((p) => p.neighborhood)),
  ];

  const filteredProperties = campinaProperties.filter((property) => {
    const bairro =
      bairroSelecionado === "Todos" ||
      property.neighborhood === bairroSelecionado;

    const categoria =
      tipo === "Todos"
        ? true
        : tipo === "Lançamentos"
        ? property.delivery &&
          property.delivery.toLowerCase() !== "pronto"
        : property.delivery &&
          property.delivery.toLowerCase() === "pronto";

    return bairro && categoria;
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-yellow-500/10 via-transparent to-transparent" />

        <div className="container-edgar relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-flex rounded-full border border-yellow-500/20 bg-white/5 px-4 py-2 uppercase tracking-[0.3em] text-xs text-yellow-400">
              Campina Grande • PB
            </span>

            <h1 className="mt-8 text-[clamp(3rem,8vw,5.5rem)] font-light leading-none text-white">
              Invista em
              <span className="block font-semibold text-yellow-400">
                Campina Grande
              </span>
            </h1>

            <p className="mt-8 text-lg text-zinc-400 leading-8 max-w-3xl mx-auto">
              Reconhecida como um dos principais polos tecnológicos
              e universitários do Nordeste, Campina Grande apresenta
              crescimento constante, excelente infraestrutura e um
              mercado imobiliário com alto potencial de valorização.
              Selecionamos empreendimentos que unem localização,
              qualidade construtiva e ótima rentabilidade.
            </p>

          </div>
        </div>
      </section>
<MarketTickerCG />
     {/* MAPA */}
<section className="pb-32">

  <div className="container-edgar">

    <div className="mx-auto max-w-7xl rounded-[36px] border border-yellow-500/20 bg-linear-to-b from-zinc-900/70 to-black  py-14 px-10 lg:py-20 lg:px-16 shadow-[0_0_60px_rgba(234,179,8,0.08)]">

     <div className="grid lg:grid-cols-2 gap-24 items-center min-h-140">

        {/* FOTO */}
        <div className="flex justify-center">

          <div className="relative group w-full max-w-160">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[36px] bg-yellow-500/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

            {/* Cantos */}
            <div className="absolute -left-4 -top-4 h-14 w-14 border-l-[3px] border-t-[3px] border-yellow-500 rounded-tl-2xl"></div>

            <div className="absolute -right-4 -bottom-4 h-14 w-14 border-r-[3px] border-b-[3px] border-yellow-500 rounded-br-2xl"></div>

            {/* Quadro */}
            <div className="relative overflow-hidden rounded-[30px] border border-yellow-500 bg-zinc-950 p-3 shadow-[0_0_45px_rgba(234,179,8,0.12)]">

              <img
  src="/campina-grande-mapa.png"
  alt="Campina Grande"
  className="h-105 lg:h-125 w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-105"
/>

              {/* Gradiente */}
              <div className="absolute inset-0 rounded-[22px] bg-linear-to-t from-black/35 via-transparent to-transparent"></div>

              {/* Badge */}
              <div className="absolute left-7 top-7 rounded-full bg-yellow-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-black shadow-lg">
                Campina Grande
              </div>

            </div>

          </div>

        </div>

        {/* TEXTO */}
        <div className="max-w-xl mx-auto lg:mx-0">

          <span className="uppercase tracking-[0.35em] text-xs text-yellow-400">
            LOCALIZAÇÃO ESTRATÉGICA
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl leading-tight font-light text-white">
            Crescimento planejado e
            <span className="block text-yellow-400 font-medium">
              bairros em expansão
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Campina Grande é um dos principais polos tecnológicos e
            universitários do Nordeste. Com infraestrutura consolidada,
            bairros em constante expansão e excelente qualidade de vida,
            a cidade reúne fatores que impulsionam a valorização dos
            empreendimentos e oferecem segurança para quem deseja morar
            ou investir.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* FILTROS */}
       <PropertyFilters
        bairros={bairros}
        busca={busca}
        setBusca={setBusca}
        bairroSelecionado={bairroSelecionado}
        setBairroSelecionado={setBairroSelecionado}
        categoria={categoria}
        setCategoria={setCategoria}
        tipo={tipo}
        setTipo={setTipo}
      />

      {/* IMÓVEIS */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">

            {filteredProperties.map((property) => (
              <article
                key={property.slug}
                className="group w-full max-w-140 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <img
                  src={property.cover}
                  alt={property.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="p-7">

                  <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                    {property.neighborhood}
                  </span>

                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {property.name}
                  </h2>

                  <p className="mt-4 text-zinc-400">
                    📍 {property.location}
                  </p>

                  <p className="mt-4 text-lg font-semibold text-yellow-400">
                    {property.price}
                  </p>

                  <p className="mt-2 text-zinc-500">
                    {property.delivery}
                  </p>

                  <Link
                    to={`/lancamentos/${property.slug}`}
                    className="mt-6 inline-flex w-full justify-center rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Ver Empreendimento
                  </Link>

                </div>
              </article>
            ))}

          </div>

          {filteredProperties.length === 0 && (
            <div className="py-24 text-center text-zinc-500">
              Nenhum empreendimento encontrado.
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container-edgar">

          <div className="rounded-4xl border border-white/10 bg-white/5 p-14 text-center backdrop-blur-xl">

            <h2 className="text-5xl font-light text-white">
              Encontre o imóvel ideal em Campina Grande
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
              Receba uma consultoria personalizada e tenha acesso aos
              melhores empreendimentos disponíveis na cidade.
            </p>

            <a
              href="https://wa.me/5583996618063"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:scale-105 transition"
            >f
              Agendar Atendimento
            </a>

          </div>

        </div>
      </section>
    </Layout>
  );
}