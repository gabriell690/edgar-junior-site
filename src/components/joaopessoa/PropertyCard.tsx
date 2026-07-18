import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Heart,
  ArrowRight,
} from "lucide-react";

import type { Property } from "../../types/Property";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const isReady =
    property.delivery.toLowerCase() === "pronto";

  return (
    <article
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-[#111111]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-500
      hover:shadow-[0_20px_60px_rgba(234,179,8,0.20)]
      "
    >
      {/* FOTO */}

      <div className="relative overflow-hidden">

        <img
          src={property.cover}
          alt={property.name}
          className="
          h-80
          w-full
          object-cover
          duration-700
          group-hover:scale-110
          "
        />

        {/* Badge */}

        <div className="absolute left-5 top-5">

          <span
            className="
            rounded-full
            bg-black/75
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-yellow-400
            backdrop-blur
            "
          >
            {isReady ? "Pronto para morar" : "Lançamento"}
          </span>

        </div>

        {/* Favorito */}

        <button
          className="
          absolute
          right-5
          top-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-black/60
          backdrop-blur
          transition
          hover:bg-yellow-500
          "
        >
          <Heart
            size={18}
            className="text-white"
          />
        </button>

        {/* Gradiente */}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black to-transparent" />

      </div>

      {/* CONTEÚDO */}

      <div className="p-7">

        <p
          className="
          text-xs
          uppercase
          tracking-[0.30em]
          text-yellow-400
          "
        >
          {property.neighborhood}
        </p>

        <h2
          className="
          mt-3
          text-3xl
          font-semibold
          text-white
          "
        >
          {property.name}
        </h2>

        <div
          className="
          mt-4
          flex
          items-center
          gap-2
          text-zinc-400
          "
        >
          <MapPin
            size={16}
            className="text-yellow-500"
          />

          <span>{property.location}</span>

        </div>

        {/* LINHA */}

        <div className="my-7 border-t border-zinc-800" />

        {/* PREÇO */}

        <div>

          <p className="text-sm text-zinc-500">

            A partir de

          </p>

          <h3
            className="
            mt-2
            text-4xl
            font-bold
            text-yellow-400
            "
          >
            {property.price}
          </h3>

        </div>

        {/* ENTREGA */}

        <div
          className="
          mt-7
          flex
          items-center
          gap-3
          text-zinc-400
          "
        >

          <Calendar
            size={18}
            className="text-yellow-500"
          />

          <div>

            <p className="text-xs uppercase tracking-widest">

              Entrega

            </p>

            <span className="text-white">

              {property.delivery}

            </span>

          </div>

        </div>

        {/* BOTÃO */}

        <Link
          to={`/lancamentos/${property.slug}`}
          className="
          mt-8
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-yellow-500
          py-4
          font-semibold
          text-black
          transition
          hover:scale-[1.02]
          hover:bg-yellow-400
          "
        >

          Conhecer empreendimento

          <ArrowRight size={18} />

        </Link>

      </div>
    </article>
  );
}