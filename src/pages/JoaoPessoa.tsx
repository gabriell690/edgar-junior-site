import { useMemo, useState } from "react";

import Layout from "../components/Layout";
import Hero from "../components/joaopessoa/HeroJoaoPessoa";
import MarketTickerJP from "../components/market/MarketTickerJP";
import InteractiveMap from "../components/InteractiveMap";
import PropertyFilters from "../components/joaopessoa/PropertyFilters";
import PropertyGrid from "../components/joaopessoa/PropertyGrid";
import CTAJoaoPessoa from "../components/joaopessoa/CTAJoaoPessoa";

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

  const categorias = useMemo<string[]>(() => {
  return [
    "Todos",
    ...Array.from(
      new Set(
        joaoPessoaProperties
          .map((p) => p.category)
          .filter((category): category is string => Boolean(category))
          .map((category) => category.trim())
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR")),
  ];
}, [joaoPessoaProperties]);

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

      const matchCategoria =
        categoria === "Todos" ||
        property.category === categoria;

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

      <Hero />

      <MarketTickerJP />

      <InteractiveMap
        selectedNeighborhood={bairroSelecionado}
        onNeighborhoodSelect={setBairroSelecionado}
      />

      <PropertyFilters
        bairros={bairros}
        categorias={categorias}
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

      <PropertyGrid
        properties={filteredProperties}
      />

      <CTAJoaoPessoa />

    </Layout>
  );
}