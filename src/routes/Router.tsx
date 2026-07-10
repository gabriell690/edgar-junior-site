import { Routes, Route } from "react-router-dom";
import Property from "../pages/Property";
import Home from "../pages/Home";
import JoaoPessoa from "../pages/JoaoPessoa";
import CampinaGrande from "../pages/CampinaGrande";
import ConsultoriaImobiliaria from "../pages/ConsultoriaImobiliaria";

export default function Router() {
  return (
   <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/joao-pessoa"
    element={<JoaoPessoa />}
  />

  <Route
    path="/campina-grande"
    element={<CampinaGrande />}
  />

  <Route
    path="/consultoria-imobiliaria"
    element={<ConsultoriaImobiliaria />}
  />

  <Route
    path="/lancamentos/:slug"
    element={<Property />}
  />

</Routes>
  );
}