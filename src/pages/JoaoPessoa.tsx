 
import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { properties } from "../data/properties";
import MarketTickerJP from "../components/market/MarketTickerJP";
import Hero from "../components/joaopessoa/HeroJoaoPessoa";
import MapSection from "../components/joaopessoa/MapSection";
import CTAJoaoPessoa from "../components/joaopessoa/CTAJoaoPessoa";
import PropertyGrid from "../components/joaopessoa/PropertyGrid";
import PropertyFilters from "../components/joaopessoa/PropertyFilters";

export default function JoaoPessoa() {

  const [tipo, setTipo] = useState("Todos");
  const [bairroSelecionado, setBairroSelecionado] = useState("Todos");
const [busca, setBusca] = useState("");
const [categoria, setCategoria] = useState("Todos");

  const joaoPessoaProperties = useMemo(
    () =>
      properties.filter((property) =>
        property.location.toLowerCase().includes("joão pessoa") ||
        property.location.toLowerCase().includes("joao pessoa")
      ),
    []
  );

  // 👇 ADICIONE AQUI

  

  // restante do código...

  const bairros = [
    "Todos",
    ...new Set(joaoPessoaProperties.map((p) => p.neighborhood)),
  ];

  const filteredProperties = joaoPessoaProperties.filter((property) => {
    const bairro =
      bairroSelecionado === "Todos" ||
      property.neighborhood === bairroSelecionado;

      
    const categoria =
      tipo === "Todos"
        ? true
        : tipo === "Lançamentos"
        ? property.delivery &&
          property.delivery.toLowerCase() !== "pronto"
        : property.delivery &&
          property.delivery.toLowerCase() === "pronto";

    return bairro && categoria;
  });

  return (
    <Layout>
      
      {/* HERO */}
      <Hero />

     <MarketTickerJP  />

      {/* MAPA */}
      <MapSection />

      {/* FILTROS */}
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
/>

      {/* IMÓVEIS */}
      <PropertyGrid
  properties={filteredProperties}
/>

      {/* CTA */}
      <CTAJoaoPessoa />
    </Layout>
  );
}