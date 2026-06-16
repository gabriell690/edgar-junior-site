export default function CTA() {
  return (
    <section
      id="contato"
      className="py-32 bg-gradient-to-b from-black to-zinc-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <span className="inline-block mb-6 px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 text-sm tracking-widest uppercase">
          Atendimento Personalizado
        </span>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          O imóvel certo não é apenas uma compra.
          <span className="block text-yellow-500 mt-2">
            É uma decisão de futuro
          </span>
        </h2>

        <p className="mt-8 text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Receba uma consultoria especializada para encontrar os melhores
          lançamentos e oportunidades imobiliárias em Campina Grande e João Pessoa.
        </p>

        <div className="mt-12">
          <a
            href="https://wa.me/5583996618063"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-500 text-black font-bold px-10 py-5 rounded-full text-lg shadow-2xl transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
          >
            Falar com Edgar Junior
          </a>
        </div>

        <p className="mt-6 text-zinc-500 text-sm">
          Atendimento rápido • Consultoria especializada • Sem compromisso
        </p>

      </div>
    </section>
  );
}
