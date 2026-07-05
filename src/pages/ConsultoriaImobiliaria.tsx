import { useState } from "react";
import Layout from "../components/Layout";

export default function ConsultoriaImobiliaria() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    objetivo: "",
    valor: "",
    cidade: "",
    bairro: "",
    tipo: "",
    quartos: "",
    metragem: "",
    prazo: "",
    observacoes: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function enviarWhatsApp() {
    const mensagem = `Olá Edgar! Gostaria de uma consultoria imobiliária.

*Nome:* ${form.nome}

*Telefone:* ${form.telefone}

*Objetivo:* ${form.objetivo}

*Faixa de investimento:* ${form.valor}

*Cidade:* ${form.cidade}

*Bairro desejado:* ${form.bairro}

*Tipo de imóvel:* ${form.tipo}

*Quantidade de quartos:* ${form.quartos}

*Metragem aproximada:* ${form.metragem}

*Prazo para compra:* ${form.prazo}

*Observações:*
${form.observacoes}`;

    window.open(
      `https://wa.me/5583996618063?text=${encodeURIComponent(
        mensagem
      )}`,
      "_blank"
    );
  }

  return (
    <Layout>
      {/* HERO */}

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />

        <div className="container-edgar relative z-10 max-w-4xl mx-auto text-center">

          <span className="inline-flex rounded-full border border-yellow-500/20 bg-white/5 px-4 py-2 uppercase tracking-[0.3em] text-xs text-yellow-400">
            Atendimento Personalizado
          </span>

          <h1 className="mt-8 text-[clamp(3rem,8vw,5.5rem)] leading-none font-light text-white">
            Consultoria
            <span className="block text-yellow-400 font-semibold">
              Imobiliária
            </span>
          </h1>

          <p className="mt-8 text-lg text-zinc-400 leading-8">
            Responda algumas perguntas para que possamos
            entender exatamente o imóvel ideal para você.
            Assim conseguiremos apresentar apenas opções
            alinhadas ao seu perfil.
          </p>

        </div>
      </section>

      {/* FORMULÁRIO */}

      <section className="pb-32">
        <div className="container-edgar max-w-5xl">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-sm text-zinc-400">
                  Nome Completo
                </label>

                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  WhatsApp
                </label>

                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Qual seu objetivo?
                </label>

                <select
                  name="objetivo"
                  value={form.objetivo}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>Morar</option>
                  <option>Investimento</option>
                  <option>Aluguel</option>
                  <option>Casa de Praia</option>
                  <option>Segunda Residência</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Faixa de Investimento
                </label>

                <select
                  name="valor"
                  value={form.valor}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>Até R$300 mil</option>
                  <option>R$300 mil a R$500 mil</option>
                  <option>R$500 mil a R$800 mil</option>
                  <option>R$800 mil a R$1 milhão</option>
                  <option>Acima de R$1 milhão</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Cidade de Interesse
                </label>

                <select
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>Campina Grande</option>
                  <option>João Pessoa</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Bairro Desejado
                </label>

                <input
                  name="bairro"
                  value={form.bairro}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Tipo de Imóvel
                </label>

                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>Apartamento</option>
                  <option>Casa</option>
                  <option>Terreno</option>
                  <option>Flat</option>
                  <option>Cobertura</option>
                  <option>Sala Comercial</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Quantos Quartos?
                </label>

                <select
                  name="quartos"
                  value={form.quartos}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Metragem aproximada
                </label>

                <input
                  name="metragem"
                  value={form.metragem}
                  onChange={handleChange}
                  placeholder="Ex.: 90m²"
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Quando pretende comprar?
                </label>

                <select
                  name="prazo"
                  value={form.prazo}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
                >
                  <option>Selecione</option>
                  <option>Imediatamente</option>
                  <option>Até 3 meses</option>
                  <option>Até 6 meses</option>
                  <option>Ainda pesquisando</option>
                </select>
              </div>

            </div>

            <div className="mt-8">

              <label className="text-sm text-zinc-400">
                Conte um pouco mais sobre o imóvel que procura
              </label>

              <textarea
                rows={6}
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-4 text-white"
              />

            </div>

            <div className="mt-10 text-center">

              <button
                onClick={enviarWhatsApp}
                className="px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:scale-105 transition"
              >
                Receber Consultoria Personalizada
              </button>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}