import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Lancamentos from "../pages/Lancamentos";
import Property from "../pages/Property";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/lancamentos"
        element={<Lancamentos />}
      />

      <Route
        path="/lancamentos/:slug"
        element={<Property />}
      />
    </Routes>
  );
}