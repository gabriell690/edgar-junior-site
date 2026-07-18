import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  BadgePercent,
  Building2,
  ChartNoAxesCombined,
  Landmark,
  TrendingUp,
} from "lucide-react";


const indicadores = [
  {
    nome: "SELIC",
    valor: "15%",
    info: "Taxa básica",
    icon: BadgePercent,
  },
  {
    nome: "CDI",
    valor: "14,78%",
    info: "Renda fixa",
    icon: Landmark,
  },
  {
    nome: "INCC",
    valor: "6,84%",
    info: "Construção Civil",
    icon: Building2,
  },
  {
    nome: "João Pessoa",
    valor: "+13%",
    info: "Valorização imobiliária",
    icon: TrendingUp,
  },
  {
    nome: "Mercado",
    valor: "Aquecido",
    info: "Alta demanda",
    icon: Activity,
  },
  {
    nome: "Investimento",
    valor: "Em expansão",
    info: "Novos empreendimentos",
    icon: ChartNoAxesCombined,
  },
];

export default function MarketTicker() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const atualizarHora = () => {
      setHora(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    atualizarHora();

    const intervalo = setInterval(atualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const ticker = useMemo(
    () => [...indicadores, ...indicadores],
    []
  );

  return (
   <section className="relative overflow-hidden bg-[#050505] border-y border-white/10 mb-24">
      <div
  className="
    absolute
    inset-0
    bg-linear-to-b
    from-transparent
    via-black/20
    to-transparent
  "
/>

      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-yellow-400">
                João Pessoa
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mt-2">
              Radar do Mercado
            </h2>

            <p className="text-sm text-gray-400">
              Indicadores econômicos e imobiliários • Atualização em tempo real
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-center">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
              ● AO VIVO
            </span>

            <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white font-mono">
              {hora}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="ticker flex gap-5">
            {ticker.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                 className="w-65 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                      <Icon
                        size={22}
                        className="text-yellow-400"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        {item.nome}
                      </p>

                      <h3 className="text-xl font-bold text-white">
                        {item.valor}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400">
                    {item.info}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#050505] to-transparent" />

<div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#050505] to-transparent" />
        </div>
      </div>
    </section>
  );
}