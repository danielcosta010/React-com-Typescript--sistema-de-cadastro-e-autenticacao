import { Outlet } from "react-router-dom";
import Cabecalho from "../../Cabecalho";
import Rodape from "../../Rodape";


export default function PaginaBase() {
  return(
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}