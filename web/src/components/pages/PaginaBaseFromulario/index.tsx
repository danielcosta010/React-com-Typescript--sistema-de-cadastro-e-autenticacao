import styled from "styled-components";
import imgFundoLogin from "./imgFundoLogin.png";
import { Outlet } from "react-router-dom";

const ContainerPrincipal = styled.div`
  background-image: url(${imgFundoLogin});
  background-size: cover;
  whith: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function PaginaBaseFormulario() {
  return (
    <ContainerPrincipal>
      <Container>
        <Outlet />
      </Container>
    </ContainerPrincipal>
  );
}
