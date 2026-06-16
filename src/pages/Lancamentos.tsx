import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { properties } from "../data/properties";

export default function Lancamentos() {
  const [bairroSelecionado, setBairroSelecionado] =
    useState("Todos");

  const bairros = [
    "Todos",
    ...new Set(
      properties.map(
        (property) => property.neighborhood
      )
    ),
  ];

  const filteredProperties =
    bairroSelecionado === "Todos"
      ? properties
      : properties.filter(
          (property) =>
            property.neighborhood === bairroSelecionado
        );

  return (
    <Layout>
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          pt-40
          pb-24
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-yellow-500/5
            via-transparent
            to-transparent
          "
        />

        <div className="container-edgar relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-yellow-500/20
                bg-white/5
                backdrop-blur-xl
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.3em]
                text-yellow-400
              "
            >
              Oportunidades
            </span>

            <h1
              className="
                mt-8
                text-white
                font-light
                leading-none
                tracking-[-0.04em]
                text-[clamp(3rem,8vw,5.5rem)]
              "
            >
              lançamentos
              <span className="block text-yellow-400 font-semibold">
                Imobiliários
              </span>
            </h1>

            <p
              className="
                mt-8
                text-zinc-400
                text-lg
                max-w-2xl
                mx-auto
              "
            >
              Oportunidades selecionadas para clientes
              que desejam investir com inteligência ou
              adquirir imóveis com alto potencial de
              valorização em João Pessoa e Campina Grande.
            </p>

          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="pb-14">
        <div className="container-edgar">

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {bairros.map((bairro) => (
              <button
                key={bairro}
                onClick={() =>
                  setBairroSelecionado(bairro)
                }
                className={`
                  px-6
                  py-3
                  rounded-full
                  border
                  transition-all
                  duration-300
                  backdrop-blur-xl

                  ${
                    bairroSelecionado === bairro
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-white/5 text-white border-white/10 hover:border-yellow-500"
                  }
                `}
              >
                {bairro}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* GRID */}
      <section className="pb-28">
       <div
  className="
    max-w-7xl
    mx-auto
  "
>
  <div
    className="
      grid
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-3
      gap-3
      justify-items-center
    "
  >
            {filteredProperties.map((property) => (
             <article
  className="
    w-full
    max-w-[720px]

    group
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
  "
>

                <div className="overflow-hidden">
                  <img
                    src={property.cover}
                    alt={property.name}
                    className="
                      h-72
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="p-7">

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-yellow-400
                    "
                  >
                    {property.neighborhood}
                  </span>

                  <h2
                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    {property.name}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-zinc-400
                    "
                  >
                    📍 {property.location}
                  </p>

                  <p
                    className="
                      mt-4
                      text-yellow-400
                      font-semibold
                      text-lg
                    "
                  >
                    {property.price}
                  </p>

                  <p
                    className="
                      mt-2
                      text-zinc-500
                    "
                  >
                    Entrega prevista: {property.delivery}
                  </p>

                  <Link
                    to={`/lancamentos/${property.slug}`}
                    className="
                      mt-6
                      inline-flex
                      w-full
                      justify-center
                      rounded-full
                      bg-yellow-500
                      px-6
                      py-3
                      font-medium
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                  >
                    Ver Empreendimento
                  </Link>

                </div>

              </article>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-24">
              <p className="text-zinc-500">
                Nenhum empreendimento encontrado.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container-edgar">

          <div
            className="
              rounded-4xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              md:p-16
              text-center
            "
          >
            <h2
              className="
                text-4xl
                md:text-5xl
                font-light
                text-white
              "
            >
              Não encontrou o imóvel ideal?
            </h2>

            <p
              className="
                mt-5
                text-zinc-400
                max-w-2xl
                mx-auto
              "
            >
              Receba atendimento personalizado e acesso
              a oportunidades exclusivas selecionadas
              conforme o seu perfil.
            </p>

            <a
              href="https://wa.me/5583996618063"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-yellow-500
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Falar com Edgar Junior
            </a>

          </div>

        </div>
      </section>
    </Layout>
  );
}
