import { Search, MapPin, Building2, Building } from "lucide-react";

interface Props {
  bairros: string[];

  busca: string;
  setBusca: (value: string) => void;

  bairroSelecionado: string;
  setBairroSelecionado: (bairro: string) => void;

  categoria: string;
  setCategoria: (categoria: string) => void;

  tipo: string;
  setTipo: (tipo: string) => void;
}

export default function PropertyFilters({
  bairros,
  busca,
  setBusca,
  bairroSelecionado,
  setBairroSelecionado,
  categoria,
  setCategoria,
  tipo,
  setTipo,
}: Props) {
  return (
    <section className="px-5 pb-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-xl">

        {/* Título */}

        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-500">
            Pesquisa Inteligente
          </p>

          <h2 className="mt-3 text-3xl font-light text-white">
            Encontre o imóvel ideal
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Utilize os filtros para encontrar o empreendimento perfeito.
          </p>
        </div>

        {/* Busca */}

        <div className="relative mb-8">
          <Search size={20} className="text-yellow-500" />

          <input
            type="text"
            placeholder="Buscar empreendimento..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full rounded-2xl border border-zinc-700 bg-[#161616] py-4 pl-14 pr-5 text-white outline-none transition focus:border-yellow-500"
          />
        </div>

        {/* Filtros */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {/* Bairro */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={16} className="text-yellow-500" />
              Bairro
            </label>

            <select
              value={bairroSelecionado}
              onChange={(e) => setBairroSelecionado(e.target.value)}
              className="w-full rounded-2xl border border-zinc-700 bg-[#161616] px-5 py-4 text-white outline-none transition focus:border-yellow-500"
            >
              {bairros.map((bairro) => (
                <option key={bairro} value={bairro}>
                  {bairro}
                </option>
              ))}
            </select>
          </div>

          {/* Categoria */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
              <Building2 size={16} className="text-yellow-500" />
              Categoria
            </label>

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full rounded-2xl border border-zinc-700 bg-[#161616] px-5 py-4 text-white outline-none transition focus:border-yellow-500"
            >
              <option value="Todos">Todos</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Flat">Flat</option>
            </select>
          </div>

          {/* Status */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
              <Building size={16} className="text-yellow-500" />
              Status
            </label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full rounded-2xl border border-zinc-700 bg-[#161616] px-5 py-4 text-white outline-none transition focus:border-yellow-500"
            >
              <option value="Todos">Todos</option>
              <option value="Lançamentos">Lançamentos</option>
              <option value="Prontos">Prontos</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
}