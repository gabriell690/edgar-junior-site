import type { Property } from "../../types/Property";
import PropertyCard from "./PropertyCard";

interface Props {
  properties: Property[];
}

export default function PropertyGrid({ properties }: Props) {
  return (
    <section className="pb-28">
      <div className="max-w-7xl mx-auto">

        <div className="
grid
gap-8
sm:grid-cols-1
lg:grid-cols-2
2xl:grid-cols-3
">

          {properties.map((property) => (
            <PropertyCard
              key={property.slug}
              property={property}
            />
          ))}

        </div>

        {properties.length === 0 && (
          <div className="py-24 text-center text-zinc-500">
            Nenhum empreendimento encontrado.
          </div>
        )}

      </div>
    </section>
  );
}