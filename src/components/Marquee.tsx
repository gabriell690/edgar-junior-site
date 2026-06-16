export default function Marquee() {
  const items = [
    "EXCLUSIVIDADE",
    "PATRIMÔNIO",
    "SOFISTICAÇÃO",
    "INVESTIMENTO",
    "ALTO PADRÃO",
    "SEGURANÇA",
    "LEGADO",
    "VALORIZAÇÃO",
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-black">

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-transparent
          via-yellow-500/5
          to-transparent
        "
      />

      <div className="relative py-5">

        <div className="flex w-max animate-marquee">

          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-8
                px-8
                whitespace-nowrap
              "
            >
              <span
                className="
                  text-xs
                  md:text-sm
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                  font-light
                "
              >
                {item}
              </span>

              <span className="text-yellow-400">
                •
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}