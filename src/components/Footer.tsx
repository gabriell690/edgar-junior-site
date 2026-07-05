export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500">
              Edgar Junior
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Especialista em imóveis de médio e alto padrão,
              conectando clientes aos melhores empreendimentos
              de Campina Grande e João Pessoa.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Navegação
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <a href="/" className="hover:text-yellow-500 transition">
                  Início
                </a>
              </li>

              <li>
                <a href="/lancamentos" className="hover:text-yellow-500 transition">
                  Lançamentos
                </a>
              </li>

              <li>
                <a href="/sobre" className="hover:text-yellow-500 transition">
                  Sobre
                </a>
              </li>

              <li>
                <a href="/contato" className="hover:text-yellow-500 transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Atuação */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Cidades de Atuação
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Campina Grande - PB</li>
              <li>João Pessoa - PB</li>
            </ul>

            <a
              href="https://wa.me/558396618063"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
  <p className="text-zinc-500 text-sm">
    © {new Date().getFullYear()} Edgar Junior. Todos os direitos reservados.
  </p>

  <p className="text-zinc-600 text-xs mt-2">
    Desenvolvido por{" "}
    <a
      href="https://www.instagram.com/gabriellbatistareal/"
      target="_blank"
      rel="noreferrer"
      className="hover:text-yellow-500 transition"
    >
      © toomidia.dev
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}
