import {
  ShieldCheck,
  Building2,
  TrendingUp,
  Handshake
} from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Atendimento Premium",
    description:
      "Acompanhamento próximo e personalizado, garantindo tranquilidade em cada decisão."
  },
  {
    icon: Building2,
    title: "Expertise Local",
    description:
      "Conhecimento profundo dos melhores bairros, empreendimentos e oportunidades."
  },
  {
    icon: TrendingUp,
    title: "Investimento Inteligente",
    description:
      "Orientação estratégica para maximizar valorização e retorno patrimonial."
  },
  {
    icon: Handshake,
    title: "Processo Completo",
    description:
      "Suporte integral desde a primeira visita até a assinatura do contrato."
  }
];

export default function WhyChooseEdgar() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        lg:py-36
        bg-[#F7F3EE]
      "
    >
      {/* Background decorativo */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_40%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <span
            className="
              inline-block
              text-[#B8860B]
              uppercase
              tracking-[0.35em]
              text-xs
              md:text-sm
              font-medium
            "
          >
            Diferenciais
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-light
              text-zinc-900
              leading-tight
            "
          >
            Mais do que imóveis.

            <span
              className="
                block
                font-semibold
                text-[#B8860B]
                mt-2
              "
            >
              Uma experiência exclusiva.
            </span>
          </h2>

          <p
            className="
              mt-8
              text-zinc-600
              text-base
              md:text-lg
              leading-8
            "
          >
            Atendimento estratégico, transparência e excelência para
            conectar você aos melhores imóveis e oportunidades do mercado.
          </p>

        </div>

        {/* Cards */}
        <div
          className="
            mt-20
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  bg-white/90
                  backdrop-blur
                  border
                  border-zinc-200
                  rounded-[28px]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-[#D4AF37]/40
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#D4AF37]/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/20
                  "
                >
                  <Icon
                    size={26}
                    className="text-[#B8860B]"
                  />
                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-zinc-900
                    mb-4
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-zinc-600
                    leading-7
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-0.75
                    bg-linear-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}