import {
  Landmark,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Building2,
  BadgePercent,
  BarChart3,
} from "lucide-react";

interface MarketItem {
  id: number;
  title: string;
  value: string;
  variation: string;
  positive: boolean;
  icon: React.ElementType;
}

const marketData: MarketItem[] = [
  {
    id: 1,
    title: "SELIC",
    value: "15,00%",
    variation: "+0,25%",
    positive: true,
    icon: BadgePercent,
  },
  {
    id: 2,
    title: "CDI",
    value: "14,90%",
    variation: "+0,20%",
    positive: true,
    icon: DollarSign,
  },
  {
    id: 3,
    title: "IPCA",
    value: "5,32%",
    variation: "+0,08%",
    positive: false,
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "INCC",
    value: "0,42%",
    variation: "-0,03%",
    positive: false,
    icon: Building2,
  },
  {
    id: 5,
    title: "IFIX",
    value: "3.462",
    variation: "+1,12%",
    positive: true,
    icon: BarChart3,
  },
  {
    id: 6,
    title: "POUPANÇA",
    value: "0,67%",
    variation: "+0,01%",
    positive: true,
    icon: Landmark,
  },
];

const ticker = [...marketData, ...marketData];

export default function MarketTicker() {
  return (
    <section className="relative overflow-hidden py-8">

      <div className="container-edgar">

        <div className="
relative
overflow-hidden
rounded-full
border
border-white/10
bg-linear-to-r
from-white/5
via-white/8
to-white/5
backdrop-blur-2xl
shadow-[0_10px_50px_rgba(0,0,0,.35)]
">

          {/* Fade esquerdo */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#090909] to-transparent" />

          {/* Fade direito */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#090909] to-transparent" />

          <div className="ticker-track">

            {ticker.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="
ticker-item
group
cursor-pointer
hover:scale-105
duration-300
"
                >
                  <div className="flex items-center gap-3">

                    <div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-yellow-500/10
ring-1
ring-yellow-500/20
transition-all
duration-500
group-hover:bg-yellow-500/20
"
>
                      <Icon
                        size={18}
                        className="text-yellow-500"
                      />

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                        {item.title}
                      </p>

                      <div className="mt-1 flex items-center gap-3">

                        <span className="
text-xl
font-bold
tracking-wide
text-white
">
                          {item.value}
                        </span>

                        <span
                          className={`flex items-center gap-1 text-sm font-medium ${
                            item.positive
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {item.positive ? (
                            <TrendingUp size={15} />
                          ) : (
                            <TrendingDown size={15} />
                          )}

                          {item.variation}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}