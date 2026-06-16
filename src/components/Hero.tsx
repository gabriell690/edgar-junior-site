 

export default function Hero() {
  return (
    <section className="relative h-svh overflow-hidden bg-black">

      {/* Background */}
      <div
        className="absolute inset-0 scale-[1.03]"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/20" />

      {/* Glow */}
      <div
        className="
          absolute
          left-[15%]
          top-[40%]
          h-100
          w-100
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-6
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              max-w-170
              pt-[10vh]
            "
          >

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-yellow-500/20
                bg-white/5
                backdrop-blur-xl
                px-4
                py-2
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-yellow-400
              "
            >
              Consultoria Imobiliária Exclusiva
            </div>

            {/* Headline */}
            <h1
              className="
                mt-6
                text-white
                font-light
                leading-[0.98]
                tracking-[-0.04em]
                text-[clamp(2.4rem,5vw,4.8rem)]
              "
            >
              O investimento certo para
              <span className="block font-semibold text-yellow-400">
                o próximo capítulo
              </span>
              da sua história.
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-140
                text-sm
                md:text-base
                text-zinc-300
                leading-relaxed
              "
            >
              Assessoria especializada para clientes que buscam
              patrimônio, exclusividade e oportunidades imobiliárias
              diferenciadas em Campina Grande e João Pessoa.
            </p>

            {/* CTA */}
            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >
              <a
                href="/lancamentos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  px-6
                  py-3
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:scale-[1.02]
                "
              >
                Explorar Oportunidades
              </a>

              <a
                href="https://wa.me/5583996618063"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-6
                  py-3
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Consultoria Exclusiva
              </a>
            </div>

            {/* Credibilidade */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
                text-xs
                md:text-sm
                text-white/60
              "
            >
              <span>+100 Clientes Atendidos</span>

              <span className="h-1 w-1 rounded-full bg-yellow-400" />

              <span>Campina Grande & João Pessoa</span>

              <span className="h-1 w-1 rounded-full bg-yellow-400" />

              <span>Atendimento Exclusivo</span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          Scroll
        </span>

        <div
          className="
            h-8
            w-5
            rounded-full
            border
            border-white/20
            flex
            justify-center
            pt-1.5
          "
        >
          <div
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-yellow-400
              animate-bounce
            "
          />
        </div>
      </div>

      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black to-transparent" />

    </section>
  );
}
