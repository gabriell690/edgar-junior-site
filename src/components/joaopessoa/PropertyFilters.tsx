import {
  Search,
  MapPin,
  Building2,
  Building,
  RotateCcw,
  Home,
} from "lucide-react";

interface Props {
  bairros: string[];
  categorias: string[];

  busca: string;
  setBusca: (value: string) => void;

  bairroSelecionado: string;
  setBairroSelecionado: (bairro: string) => void;

  categoria: string;
  setCategoria: (categoria: string) => void;

  tipo: string;
  setTipo: (tipo: string) => void;

  totalResultados: number;
}

export default function PropertyFilters({
  bairros,
  categorias,
  busca,
  setBusca,
  bairroSelecionado,
  setBairroSelecionado,
  categoria,
  setCategoria,
  tipo,
  setTipo,
  totalResultados,
}: Props) {
  function limparFiltros() {
    setBusca("");
    setBairroSelecionado("Todos");
    setCategoria("Todos");
    setTipo("Todos");
  }

  return (
    <aside
      className="
        sticky
        top-24
        rounded-3xl
        border
        border-zinc-800
        bg-[#101010]
        p-7
        shadow-2xl
      "
    >
      {/* Cabeçalho */}

      <div className="mb-8">

        <span className="text-xs uppercase tracking-[0.35em] text-yellow-500">
          Pesquisa Inteligente
        </span>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Encontre seu imóvel
        </h2>

        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
          Pesquise por nome, bairro, localização ou categoria.
        </p>

      </div>

      {/* Busca */}

      <div className="mb-7">

        <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

          <Search
            size={16}
            className="text-yellow-500"
          />

          Buscar

        </label>

        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex.: Miramar, Zion..."
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            text-white
            placeholder:text-zinc-500
            outline-none
            transition
            focus:border-yellow-500
          "
        />

      </div>

      {/* Bairro */}

      <div className="mb-6">

        <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

          <MapPin
            size={16}
            className="text-yellow-500"
          />

          Bairro

        </label>

        <select
          value={bairroSelecionado}
          onChange={(e) => setBairroSelecionado(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-yellow-500
          "
        >
          {bairros.map((bairro) => (
            <option
              key={bairro}
              value={bairro}
            >
              {bairro}
            </option>
          ))}
        </select>

      </div>

      {/* Categoria */}

      <div className="mb-6">

        <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

          <Building2
            size={16}
            className="text-yellow-500"
          />

          Categoria

        </label>

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-yellow-500
          "
        >
          {categorias.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      {/* Status */}

      <div className="mb-8">

        <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

          <Building
            size={16}
            className="text-yellow-500"
          />

          Status

        </label>

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-yellow-500
          "
        >
          <option value="Todos">
            Todos
          </option>

          <option value="Lançamentos">
            Lançamentos
          </option>

          <option value="Prontos">
            Prontos
          </option>
        </select>

      </div>

      {/* Resultado */}

      <div className="mb-8 rounded-2xl bg-zinc-900 p-5">

        <div className="flex items-center gap-3">

          <Home
            className="text-yellow-500"
            size={20}
          />

          <div>

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Resultado
            </p>

            <p className="text-xl font-bold text-white">
              {totalResultados}
            </p>

            <span className="text-sm text-zinc-400">
              empreendimentos encontrados
            </span>

          </div>

        </div>

      </div>

      {/* Botão */}

      <button
        onClick={limparFiltros}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-yellow-500
          py-3
          font-semibold
          text-yellow-500
          transition-all
          duration-300
          hover:bg-yellow-500
          hover:text-black
        "
      >

        <RotateCcw size={18} />

        Limpar filtros

      </button>

    </aside>
  );
}