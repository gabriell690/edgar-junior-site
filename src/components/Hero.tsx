import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { properties } from "../data/properties";

export default function Hero() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];

    return properties.filter((property) =>
      [
        property.name,
        property.neighborhood,
        property.location,
        property.slug,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  function handleSearch() {
    if (!search.trim()) {
      navigate("/lancamentos");
      return;
    }

    if (suggestions.length > 0) {
      navigate(`/lancamentos/${suggestions[0].slug}`);
    } else {
      navigate("/lancamentos");
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

     
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-6xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-yellow-400 backdrop-blur-xl">
            Consultoria Imobiliária Exclusiva
          </div>

          {/* Title */}
          <h1 className="mt-8 text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.05em] text-white">
            Encontre o imóvel ideal
            <span className="block font-semibold text-yellow-400">
              para o próximo capítulo
            </span>
            da sua história
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            Lançamentos exclusivos em Campina Grande e João Pessoa.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-14 w-full max-w-5xl">

           <div
  className="
    bg-white/95
    backdrop-blur-2xl
    rounded-[28px]
    shadow-[0_20px_80px_rgba(0,0,0,0.35)]
    overflow-hidden
  "
>
  <div className="flex flex-col md:flex-row items-stretch">

    {/* Campo */}
    <div className="flex flex-1 items-center px-6">

      <Search className="h-5 w-5 text-zinc-400 mr-4 shrink-0" />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cidade, bairro ou empreendimento"
        className="
          flex-1
          h-[72px]
          bg-transparent
          outline-none
          text-base
          md:text-lg
          text-zinc-900
        "
      />

    </div>

    {/* Botão */}
    <button
      onClick={handleSearch}
      className="
        h-[64px]
        md:h-[72px]
        px-10
        bg-yellow-500
        hover:bg-yellow-400
        text-black
        font-semibold
        transition-all
        duration-300
        md:min-w-[180px]
      "
    >
      Buscar
    </button>

  </div>
</div>
            {/* Suggestions */}
            {search && suggestions.length > 0 && (
              <div
                className="
                  absolute
                  left-0
                  right-0
                  mt-4
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-2xl
                  z-50
                "
              >

                <div
                  className="
                    max-h-[430px]
                    overflow-y-auto
                  "
                >

                  {suggestions.map((property) => (
                    <Link
                      key={property.slug}
                      to={`/lancamentos/${property.slug}`}
                      className="
                        flex
                        items-center
                        gap-4
                        px-6
                        py-5
                        border-b
                        border-zinc-100
                        transition-all
                        hover:bg-zinc-50
                      "
                    >

                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">
                        <MapPin className="h-5 w-5 text-yellow-500" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 text-left">

                        <div className="font-semibold text-zinc-900">
                          {property.name}
                        </div>

                        <div className="mt-1 text-sm text-zinc-500">
                          {property.neighborhood}
                        </div>

                      </div>

                    </Link>
                  ))}

                </div>

              </div>
            )}

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/lancamentos"
              className="
                rounded-full
                bg-yellow-500
                px-8
                py-4
                font-medium
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              Ver Lançamentos
            </Link>

            <a
              href="https://wa.me/5583996618063"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
            >
              Atendimento Exclusivo
            </a>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-10 text-sm text-white/60">

            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-white">
                +100
              </span>
              <span>Clientes</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-white">
                {properties.length}
              </span>
              <span>Lançamentos</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-white">
                PB
              </span>
              <span>Campina Grande & João Pessoa</span>
            </div>

          </div>

        </div>

      </div>

      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}