import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import PaginaBase from "./components/pages/PaginaBase";
import PaginaInicial from "./components/pages/PaginaInicial";
import PaginaBaseFormulario from "./components/pages/PaginaBaseFromulario";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaInicial />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<PaginaBaseFormulario/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
