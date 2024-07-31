import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import PaginaBase from "./components/pages/PaginaBase";
import PaginaInicial from "./components/pages/PaginaInicial";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />} >
        <Route index element={<PaginaInicial />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes