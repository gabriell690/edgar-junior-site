"use client";

import { Building2, MapPin, Waves } from "lucide-react";

export default function PresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EE] py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('/backgrounds/paraiba-grid.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.13),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-5xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#B8860B] md:text-xs">
            Foco na região
          </span>

          <h2 className="mt-5 text-4xl font-light leading-[1.05] text-zinc-950 md:text-5xl lg:text-6xl">
            Inteligência Imobiliária Premium
            <span className="block font-semibold text-[#B8860B]">na Paraíba</span>
          </h2>

          <div className="mx-auto mt-7 flex w-fit items-center gap-3">
            <span className="h-px w-10 bg-[#B8860B]/50" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-700">
              Do Interior à Capital
            </span>
            <span className="h-px w-10 bg-[#B8860B]/50" />
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-base leading-8 text-zinc-600 md:text-lg">
            <p>
              Atuamos de forma estratégica em Campina Grande e João Pessoa, com foco em lançamentos imobiliários com acesso exclusivos antecipados em regiões nobres e litorâneas, e com imóveis prontos para rentabilização, gerando renda passiva, dominando as principais regiões, investimentos seguros e patrimônio de longo prazo, através da aposentadoria em imóveis, com a renda dos aluguéis ou da venda deles a médio e longo prazo.
            </p>
            <p className="font-medium text-zinc-800">
              As melhores oportunidades em imóveis requintados e de alto luxo, com uma ativos de alto valor, com ticket elevado.
            </p>
          </div>
        </header>

        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="absolute inset-1/4 rounded-full bg-[#D4AF37]/10 blur-[110px]" />
          <img
            src="/cgjp.png"
            alt="Mapa estratégico da Paraíba entre Campina Grande e João Pessoa"
            className="relative mx-auto w-full max-w-4xl object-contain"
          />
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-zinc-600">
            <MapPin className="h-4 w-4 text-[#B8860B]" />
            <span>Do interior à capital, conectando você às melhores oportunidades.</span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white/80 p-7 shadow-[0_20px_60px_rgba(24,24,27,0.08)] backdrop-blur md:p-9">
            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#D4AF37] via-[#B8860B] to-transparent" />
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-950">
                <Building2 className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B8860B]">Interior</span>
                <h3 className="mt-1 text-2xl font-semibold text-zinc-950">Campina Grande</h3>
              </div>
            </div>
            <p className="text-[15px] leading-7 text-zinc-600 md:text-base md:leading-8">
              Conhecida por realizar <span className="font-bold text-[#D4AF37]">O Maior São João do Mundo</span>, Campina Grande é um dos principais polos de tecnologia, inovação e educação do Nordeste. A cidade oferece infraestrutura consolidada, clima agradável, excelente custo de vida e qualidade de vida. Seu crescimento urbano acontece de forma descentralizada, impulsionando novas regiões, constantes <span className="font-bold text-[#D4AF37]">lançamentos imobiliários</span> e a valorização do mercado, tornando-a uma excelente escolha para morar e investir.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-950 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.16)] md:p-9">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="relative mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                <Waves className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Capital</span>
                <h3 className="mt-1 text-2xl font-semibold text-white">João Pessoa</h3>
              </div>
            </div>
            <div className="relative space-y-4 text-[15px] leading-7 text-zinc-300 md:text-base md:leading-8">
              <p>
                Reconhecida como <span className="font-bold text-[#D4AF37]">uma das melhores cidades do Brasil</span> para morar e investir, João Pessoa encanta pela combinação única de qualidade de vida, belezas naturais e oportunidades imobiliárias.
              </p>
              <p>
                Com praias paradisíacas de águas cristalinas e mornas, clima agradável e uma atmosfera tranquila, a capital paraibana atrai moradores, turistas e investidores <span className="font-bold text-[#D4AF37]">do Brasil e do mundo</span> durante todo o ano.
              </p>
              <p>
                Em constante crescimento, João Pessoa se destaca pelo <span className="font-bold text-[#D4AF37]">mercado imobiliário aquecido</span>, com novos empreendimentos de alto padrão, valorização contínua e excelentes oportunidades para quem busca segurança, conforto e rentabilidade.
              </p>
              <p className="font-medium text-white">
                Uma cidade que une sofisticação, natureza e desenvolvimento, oferecendo o cenário ideal para morar ou investir em um dos destinos mais promissores do Brasil.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}