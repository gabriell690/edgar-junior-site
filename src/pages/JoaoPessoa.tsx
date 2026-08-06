import { useMemo, useState } from "react";

import Layout from "../components/Layout";
import Hero from "../components/joaopessoa/HeroJoaoPessoa";
import MarketTickerJP from "../components/market/MarketTickerJP";
import InteractiveMap from "../components/InteractiveMap";
import PropertyFilters from "../components/joaopessoa/PropertyFilters";
import PropertyGrid from "../components/joaopessoa/PropertyGrid";
import CTAJoaoPessoa from "../components/joaopessoa/CTAJoaoPessoa";
import SEO from "../components/SEO";

import { properties } from "../data/properties";

function normalize(text: string = "") {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function JoaoPessoa() {
  const [busca, setBusca] = useState("");
  const [bairroSelecionado, setBairroSelecionado] = useState("Todos");
  const [categoria, setCategoria] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");

  // Todos os imóveis de João Pessoa

  const joaoPessoaProperties = useMemo(() => {
    return properties.filter((property) =>
      normalize(property.location).includes("joao pessoa")
    );
  }, []);

  // Lista de bairros

  const bairros = useMemo(() => {
    return [
      "Todos",
      ...Array.from(
        new Set(
          joaoPessoaProperties
            .map((p) => p.neighborhood.trim())
            .filter(Boolean)
        ),
      ).sort((a, b) => a.localeCompare(b, "pt-BR")),
    ];
  }, [joaoPessoaProperties]);

  // Lista de categorias



  // Filtro inteligente

  const filteredProperties = useMemo(() => {
    const termo = normalize(busca);

    return joaoPessoaProperties.filter((property) => {
      const searchableText = normalize(
        [
          property.name,
          property.neighborhood,
          property.location,
          property.category,
          property.builder,
          property.description,
          property.delivery,
        ]
          .filter(Boolean)
          .join(" ")
      );

      const matchBusca =
        termo === "" ||
        searchableText.includes(termo);

      const matchBairro =
        bairroSelecionado === "Todos" ||
        property.neighborhood === bairroSelecionado;

     const textoCategoria = normalize(
  [
    property.name,
    property.category,
    property.description,
    property.location,
  ]
    .filter(Boolean)
    .join(" ")
);

const temFlat = textoCategoria.includes("flat");
const temQuartos = textoCategoria.includes("quarto");

const matchCategoria =
  categoria === "Todos" ||
  (categoria === "Flat" && temFlat) ||
  (categoria === "Apartamento" && temQuartos && !temFlat);

      const pronto =
        normalize(property.delivery) === "pronto";

      const matchStatus =
        tipo === "Todos" ||
        (tipo === "Prontos" && pronto) ||
        (tipo === "Lançamentos" && !pronto);

      return (
        matchBusca &&
        matchBairro &&
        matchCategoria &&
        matchStatus
      );
    });
  }, [
    busca,
    bairroSelecionado,
    categoria,
    tipo,
    joaoPessoaProperties,
  ]);
 console.table(
  filteredProperties.map((p, i) => ({
    i,
    slug: p.slug,
    nome: p.name,
  }))
);
 return (
  <Layout>
<SEO
    title="Imóveis em João Pessoa | Edgar Junior"
    description="Apartamentos, flats e lançamentos imobiliários em João Pessoa. Conheça oportunidades selecionadas para morar ou investir."
    canonical="/joao-pessoa"
  />
    {/* ========================================
        SIDEBAR FIXA
    ======================================== */}
   <aside
  className="
    hidden lg:flex
    fixed
    left-0
    top-16
    bottom-0
    z-40
    w-70
    flex-col
    border-r
    border-zinc-800/70
    bg-[#0b0b0b]
  "
>
  <div
    className="
      flex-1
      overflow-y-auto
      px-5
      py-5
      scrollbar-thin
    "
  >
    <PropertyFilters
  bairros={bairros}
  busca={busca}
  setBusca={setBusca}
  bairroSelecionado={bairroSelecionado}
  setBairroSelecionado={setBairroSelecionado}
  categoria={categoria}
  setCategoria={setCategoria}
  tipo={tipo}
  setTipo={setTipo}
  totalResultados={filteredProperties.length}
/>
  </div>
</aside>


    {/* ========================================
        TODO O CONTEÚDO DA PÁGINA
    ======================================== */}
   <div className="lg:ml-70">
  <Hero />

  <MarketTickerJP />

  <InteractiveMap
    selectedNeighborhood={bairroSelecionado}
    onNeighborhoodSelect={setBairroSelecionado}
  />

  <PropertyGrid properties={filteredProperties} />

  <CTAJoaoPessoa />
</div>

  </Layout>
);
}