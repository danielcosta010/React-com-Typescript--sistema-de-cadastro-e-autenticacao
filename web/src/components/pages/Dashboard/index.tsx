import { Container } from "@mui/material";
import Cabecalho from "../../Cabecalho";
import Titulo from "../../Titulo";
import Botao from "../../Botao";
import Tabela from "../../Tabela";
import Subtitulo from "../../Subtitulo";
import Grafico from "../../Grafico";
import Avaliacao from "../../Avaliacao";
import Rodape from "../../Rodape";
import useDadosConsulta from "../../../useDadosConsulta";
import useDadosProfissional from "../../../useDadosProfissional";

export default function Dashboard() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição")
  }
  return(
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  )
}