import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import JoaoPessoa from "../pages/JoaoPessoa";
import CampinaGrande from "../pages/CampinaGrande";
import ConsultoriaImobiliaria from "../pages/ConsultoriaImobiliaria";

export default function Router() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* João Pessoa */}
      <Route
        path="/joao-pessoa"
        element={<JoaoPessoa />}
      />

      {/* Campina Grande */}
      <Route
        path="/campina-grande"
        element={<CampinaGrande />}
      />

      {/* Consultoria */}
      <Route
        path="/consultoria-imobiliaria"
        element={<ConsultoriaImobiliaria />}
      />
    </Routes>
  );
}