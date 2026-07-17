import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  BadgeDollarSign,
} from "lucide-react";
import Layout from "../components/Layout";
import { properties } from "../data/properties";

export default function JoaoPessoa() {
  const [tipo, setTipo] = useState("Todos");
  const [bairroSelecionado, setBairroSelecionado] = useState("Todos");

  const joaoPessoaProperties = useMemo(
    () =>
      properties.filter((property) =>
        property.location
          .toLowerCase()
          .includes("joão pessoa") ||
        property.location
          .toLowerCase()
          .includes("joao pessoa")
      ),
    []
  );

  const bairros = [
    "Todos",
    ...new Set(joaoPessoaProperties.map((p) => p.neighborhood)),
  ];

  const filteredProperties = joaoPessoaProperties.filter((property) => {
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

      {/* MAPA */}
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

                 <div className="mt-5 space-y-3">

  <div className="flex items-center gap-2 text-zinc-400">
    <MapPin size={16} className="text-yellow-500 shrink-0" />
    <span>{property.location}</span>
  </div>

  <div className="flex items-center gap-2 text-lg font-semibold text-yellow-400">
    <BadgeDollarSign size={18} className="text-yellow-500 shrink-0" />
    <span>{property.price}</span>
  </div>

  <div className="flex items-center gap-2 text-zinc-500">
    <Calendar size={16} className="text-yellow-500 shrink-0" />
    <span>{property.delivery}</span>
  </div>

</div>

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

          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-14 text-center">

            <h2 className="text-5xl font-light text-white">
              Descubra as melhores oportunidades em João Pessoa
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
              Conte com uma consultoria especializada para investir ou adquirir
              um imóvel em uma das cidades que mais se valorizam no Brasil.
            </p>

            <a
              href="https://wa.me/5583996618063"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Agendar Atendimento
            </a>

          </div>

        </div>
      </section>
    </Layout>
  );
}