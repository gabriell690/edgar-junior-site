import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
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
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/hero.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Conteúdo */}
  <div className="relative z-10 flex min-h-screen items-center px-6 pt-32 pb-20">

    <div className="mx-auto w-full max-w-6xl">

      {/* Badge */}
      <div className="flex justify-center">
        <div
          className="
          rounded-full
          border border-yellow-500/20
          bg-white/5
          px-5
          py-2
          text-[10px]
          sm:text-xs
          uppercase
          tracking-[0.25em]
          text-yellow-400
          backdrop-blur-xl
        "
        >
          Consultoria Imobiliária Exclusiva
        </div>
      </div>

      {/* Título */}
      <div className="mx-auto mt-8 max-w-5xl text-center">

        <h1
          className="
          text-[2.9rem]
          leading-[0.95]
          font-light
          text-white
          sm:text-6xl
          lg:text-8xl
        "
        >
          Encontre o imóvel ideal

          <span className="block font-bold text-yellow-400">
            para o próximo
          </span>

          <span className="block font-bold text-yellow-400">
            capítulo
          </span>

          <span className="block">
            da sua história
          </span>

        </h1>

        <p
          className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          text-zinc-300
          md:text-xl
        "
        >
          Lançamentos exclusivos em Campina Grande e João Pessoa.
        </p>

      </div>

      {/* Busca */}
      <div className="mx-auto mt-12 w-full max-w-4xl">

        <div
          className="
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
        "
        >

          <div className="flex flex-col md:flex-row">

            {/* Campo */}
            <div className="flex flex-1 items-center px-6">

              <Search className="mr-4 h-5 w-5 text-zinc-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cidade, bairro ou empreendimento"
                className="
                h-16
                w-full
                bg-transparent
                outline-none
                text-zinc-900
              "
              />

            </div>

            {/* Botão */}
            <button
              onClick={handleSearch}
              className="
              h-14
              md:h-16
              bg-yellow-500
              px-10
              font-semibold
              text-black
              transition
              hover:bg-yellow-400
            "
            >
              Buscar
            </button>

          </div>

        </div>

      </div>

      {/* Botões */}
      <div
        className="
        mx-auto
        mt-10
        flex
        max-w-md
        flex-col
        gap-4
        sm:max-w-none
        sm:flex-row
        sm:justify-center
      "
      >

        <Link
          to="/lancamentos"
          className="
          rounded-full
          bg-yellow-500
          px-8
          py-4
          text-center
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
          border border-white/20
          bg-white/5
          px-8
          py-4
          text-center
          text-white
          backdrop-blur-xl
          transition
          hover:bg-white/10
        "
        >
          Atendimento Exclusivo
        </a>

      </div>

      {/* Estatísticas */}
      <div
        className="
        mt-16
        grid
        gap-5
        md:grid-cols-3
      "
      >

        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-8
          text-center
          backdrop-blur-xl
        "
        >
          <div className="text-4xl font-bold text-white">
            +100
          </div>

          <div className="mt-2 text-zinc-400">
            Clientes atendidos
          </div>

        </div>

        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-8
          text-center
          backdrop-blur-xl
        "
        >
          <div className="text-4xl font-bold text-white">
            {properties.length}
          </div>

          <div className="mt-2 text-zinc-400">
            Lançamentos
          </div>

        </div>

        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-8
          text-center
          backdrop-blur-xl
        "
        >
          <div className="text-4xl font-bold text-white">
            PB
          </div>

          <div className="mt-2 text-zinc-400">
            Campina Grande & João Pessoa
          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Fade inferior */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

</section>
);
}