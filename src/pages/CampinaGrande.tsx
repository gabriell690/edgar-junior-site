import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { properties } from "../data/properties";

export default function CampinaGrande() {
  const [tipo, setTipo] = useState("Todos");
  const [bairroSelecionado, setBairroSelecionado] = useState("Todos");

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

      {/* MAPA */}
      <section className="pb-24">
        <div className="container-edgar">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <img
                src="/campina-grande-mapa.png"
                alt="Mapa de Campina Grande"
                className="rounded-3xl border border-white/10"
              />
            </div>

            <div>
              <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs">
                Localização Estratégica
              </span>

              <h2 className="mt-5 text-4xl font-light text-white">
                Crescimento planejado e bairros em expansão
              </h2>

              <p className="mt-6 text-zinc-400 leading-8">
                Campina Grande possui regiões com forte crescimento
                imobiliário, excelente mobilidade urbana e acesso aos
                principais centros comerciais, universidades e hospitais.
                Investir hoje significa aproveitar o potencial de
                valorização dos próximos anos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FILTROS */}
      <section className="pb-12">
        <div className="container-edgar">

          <div className="flex flex-wrap justify-center gap-3 mb-8">

            {["Todos", "Lançamentos", "Prontos"].map((item) => (
              <button
                key={item}
                onClick={() => setTipo(item)}
                className={`px-6 py-3 rounded-full transition ${
                  tipo === item
                    ? "bg-yellow-500 text-black"
                    : "bg-white/5 border border-white/10 text-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          <div className="flex flex-wrap justify-center gap-3">

            {bairros.map((bairro) => (
              <button
                key={bairro}
                onClick={() => setBairroSelecionado(bairro)}
                className={`px-6 py-3 rounded-full transition ${
                  bairroSelecionado === bairro
                    ? "bg-yellow-500 text-black"
                    : "bg-white/5 border border-white/10 text-white"
                }`}
              >
                {bairro}
              </button>
            ))}

          </div>

        </div>
      </section>

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
            >
              Agendar Atendimento
            </a>

          </div>

        </div>
      </section>
    </Layout>
  );
}