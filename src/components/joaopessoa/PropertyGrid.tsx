import type { Property } from "../../types/Property";
import PropertyCard from "./PropertyCard";

interface Props {
  properties: Property[];
}

export default function PropertyGrid({ properties }: Props) {
  return (
    <section className="w-full pb-24">
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Cabeçalho */}

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
              Empreendimentos
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              {properties.length} imóveis encontrados
            </h2>

            <p className="mt-2 text-zinc-400">
              Explore lançamentos e imóveis prontos cuidadosamente
              selecionados.
            </p>
          </div>

        </div>

        {/* Grid */}

        {properties.length > 0 ? (
          <div
            className="
              grid
              gap-6

              grid-cols-1

              sm:grid-cols-2

              xl:grid-cols-3

              2xl:grid-cols-4
            "
          >
            {properties.map((property) => (
              <PropertyCard
                key={property.slug}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              h-72
              items-center
              justify-center
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/40
              text-center
            "
          >
            <div>

              <h3 className="text-2xl font-semibold text-white">
                Nenhum empreendimento encontrado
              </h3>

              <p className="mt-3 text-zinc-400">
                Tente alterar os filtros ou selecionar outro bairro.
              </p>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}