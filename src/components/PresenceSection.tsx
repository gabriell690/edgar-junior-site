"use client";

import {
  MapPin,
  Building2,
  Waves,
  Users,
  Home,
  BadgeCheck,
} from "lucide-react";

export default function PresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EE] py-16 lg:py-20">

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-center
          bg-cover
          bg-no-repeat
          opacity-[0.10]
          pointer-events-none
        "
        style={{
          backgroundImage: "url('/backgrounds/paraiba-grid.png')",
        }}
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_45%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-[11px]
              md:text-xs
              text-[#B8860B]
              font-medium
            "
          >
            Presença Estratégica
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-light
              text-zinc-900
              leading-[1.05]
            "
          >
            Conectando você às melhores oportunidades

            <span className="block font-semibold text-[#B8860B]">
              da Paraíba.
            </span>
          </h2>

          <p
            className="
              mt-5
              text-zinc-600
              text-base
              md:text-lg
              leading-7
              max-w-2xl
              mx-auto
            "
          >
            Atuação especializada em Campina Grande e João Pessoa,
            conectando você aos mercados mais valorizados do estado.
          </p>

        </div>

        {/* Conteúdo */}
        <div
          className="
            mt-14
            grid
            lg:grid-cols-[1.6fr_1fr]
            gap-8
            items-center
          "
        >

          {/* MAPA */}
          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-[#D4AF37]/10
                blur-[100px]
                rounded-full
              "
            />

           <img
  src="/cgjp.png"
  alt="Edgar Junior"
  className="w-full h-full object-cover"
/>

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-zinc-600
                text-sm
              "
            >
              <MapPin className="w-4 h-4 text-[#B8860B]" />

              <span>
                Do interior à capital, conectando você às melhores oportunidades.
              </span>
            </div>

          </div>

          {/* CIDADES */}
          <div className="space-y-5">

            <div
              className="
                bg-white/90
                backdrop-blur
                border
                border-zinc-200
                rounded-3xl
                overflow-hidden
                shadow-lg
              "
            >
              <div className="grid grid-cols-[80px_1fr]">

                <div
                  className="
                    bg-zinc-950
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Building2
                    size={26}
                    className="text-[#D4AF37]"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-zinc-900">
                    Campina Grande
                  </h3>

                  <p
                    className="
                      mt-2
                      text-zinc-600
                      text-sm
                      leading-6
                    "
                  >
                    Centro econômico do interior paraibano,
                    com crescimento urbano e excelentes oportunidades.
                  </p>

                </div>

              </div>
            </div>

            <div
              className="
                bg-white/90
                backdrop-blur
                border
                border-zinc-200
                rounded-3xl
                overflow-hidden
                shadow-lg
              "
            >
              <div className="grid grid-cols-[80px_1fr]">

                <div
                  className="
                    bg-zinc-950
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Waves
                    size={26}
                    className="text-[#D4AF37]"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-zinc-900">
                    João Pessoa
                  </h3>

                  <p
                    className="
                      mt-2
                      text-zinc-600
                      text-sm
                      leading-6
                    "
                  >
                    Capital em constante valorização,
                    referência em qualidade de vida e mercado imobiliário.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Estatísticas */}
        <div
          className="
            mt-12
            bg-white/90
            backdrop-blur
            border
            border-zinc-200
            rounded-3xl
            overflow-hidden
            shadow-lg
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-3">

            <div className="p-6 text-center">
              <Users className="mx-auto w-6 h-6 text-[#B8860B]" />
              <div className="mt-3 text-3xl font-bold text-zinc-900">
                +500
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Clientes atendidos
              </p>
            </div>

            <div className="p-6 text-center border-y md:border-y-0 md:border-x border-zinc-200">
              <Home className="mx-auto w-6 h-6 text-[#B8860B]" />
              <div className="mt-3 text-3xl font-bold text-zinc-900">
                +300
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Imóveis disponíveis
              </p>
            </div>

            <div className="p-6 text-center">
              <BadgeCheck className="mx-auto w-6 h-6 text-[#B8860B]" />
              <div className="mt-3 text-3xl font-bold text-zinc-900">
                100%
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Compromisso com resultados
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}