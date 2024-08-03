import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";
import autenticaStore from "../../stores/autentica.store";
import pesquisa from "./assets/search.png";

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px 14px;
  border: 1px solid black
`;
const SpanCustomizado = styled.span`
  background-image: url(${pesquisa});
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  background-position: 10px;
`;

const LinkCabecalhoInicial = styled.a`
  text-decoration: none;
  color: var(--azul-escuro);
`;
const InputPesquisa = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  padding: 8px;
`;
const BotaoEstilizado = styled.a`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  text-decoration: none;
`;

function Cabecalho() {
  const { estaAutenticado } = autenticaStore;

  const logout = () => {
    autenticaStore.logout();
  }
  return (
    <>
      {estaAutenticado ? (
        <CabecalhoEstilizado>
          <img src={logo} alt="logo da empresa Voll" />
          <Container>
            <img src={perfil} alt="imagem de perfil do usuário" />
            <LinkEstilizado href="/" onClick={logout}>Sair</LinkEstilizado>
          </Container>
        </CabecalhoEstilizado>
      ) : (
        <CabecalhoEstilizado>
          <img src={logo} alt="logo da empresa Voll" />
          <Container>
            <LinkCabecalhoInicial href="/sobre">Sobre</LinkCabecalhoInicial>
            <LinkCabecalhoInicial href="/cadastro">
              Cadastre-se
            </LinkCabecalhoInicial>
            <ContainerPesquisa>
              <InputPesquisa type="text" placeholder="Digite sua busca" />
              <SpanCustomizado />
            </ContainerPesquisa>
            <BotaoEstilizado href="/login">Login</BotaoEstilizado>
          </Container>
        </CabecalhoEstilizado>
      )}
    </>
  );
}

export default Cabecalho;
