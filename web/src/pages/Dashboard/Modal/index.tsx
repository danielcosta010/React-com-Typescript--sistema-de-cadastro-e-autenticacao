import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Switch,
} from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import CampoDigitacao from "../../../components/CampoDigitacao";
import { useState } from "react";
import iconeCep from "./iconeCep.png";
import Botao from "../../../components/Botao";

const BoxCustomizado = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 1em 5em;
`;

const ContainerEndereco = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  max-width: 95%;
  column-gap: 5%;
`;
const ContainerCep = styled.div``;

const SpanCustomizado = styled.span`
  background-repeat: no-repeat;
  background-position: start-center;
  background-size: 30px 30px;
  background-image: url(${iconeCep});
  background-color: red
  width: 100px;
  height: 35px;
  background-color: gray ;
  z-index: 2px
`;

const TituloH3 = styled.h3`
  color: var(--azul-escuro);
`;

const ContainerPlanos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SwitchToogle = styled(Switch)`
  width: 500px;
`;
const BotaoCustomizado = styled(Botao)`
  width: 50%;
  margin-left: 50%;
  margin-top: 4em;
  transform: translate(-50%, -50%);
`;
export default function ModalCadastro({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [crm, setCrm] = useState("");
  const [telefone, setTelefone] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");

  // Estado para o switch
  const [planoEstaAtivado, setIsPlanoAtivado] = useState(false);

  const handleToggleSwitch = () => {
    setIsPlanoAtivado(!planoEstaAtivado);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Formulário de cadastro de especialista"
      aria-describedby="Neste modal terá os dados de cadastro de especialista"
    >
      <BoxCustomizado>
        <Titulo>Cadastre o especialista inserindo os dados abaixo</Titulo>

        <CampoDigitacao
          tipo="text"
          valor={nome}
          placeholder="Digite seu nome"
          onChange={setNome}
          label="Nome"
        />
        <CampoDigitacao
          tipo="email"
          valor={email}
          placeholder="Digite seu e-mail"
          onChange={setEmail}
          label="Email"
        />
        <CampoDigitacao
          tipo="password"
          valor={senha}
          placeholder="Digite sua senha"
          onChange={setSenha}
          label="Senha"
        />
        <CampoDigitacao
          tipo="password"
          valor={confirmarSenha}
          placeholder="Repita a senha anterior"
          onChange={setConfirmarSenha}
          label="Repita a senha"
        />
        <CampoDigitacao
          tipo="text"
          valor={especialidade}
          placeholder="Digite a especialidade"
          onChange={setEspecialidade}
          label="Especialidade"
        />
        <CampoDigitacao
          tipo="text"
          valor={crm}
          placeholder="Insira seu número de registro"
          onChange={setCrm}
          label="CRM"
        />
        <CampoDigitacao
          tipo="number"
          valor={telefone}
          placeholder="(DDD) XXXX-XXXX"
          onChange={setTelefone}
          label="Telefone"
        />
        <CampoDigitacao
          tipo="text"
          valor={urlImagem}
          placeholder="http://img/exemplo.png"
          onChange={setUrlImagem}
          label="Insira a URL da imagem"
        />
        <ContainerCep>
          <SpanCustomizado />
          <CampoDigitacao
            tipo="number"
            valor={cep}
            placeholder="Insira o Cep"
            onChange={setCep}
            label="Endereco"
          />
        </ContainerCep>
        <ContainerEndereco>
          <CampoDigitacao
            tipo="text"
            valor={rua}
            placeholder="Rua"
            onChange={setRua}
          />
          <CampoDigitacao
            tipo="number"
            valor={numero}
            placeholder="Numero"
            onChange={setNumero}
          />
          <CampoDigitacao
            tipo="text"
            valor={complemento}
            placeholder="Complemento"
            onChange={setComplemento}
          />
          <CampoDigitacao
            tipo="text"
            valor={estado}
            placeholder="Estado"
            onChange={setEstado}
          />
        </ContainerEndereco>

        <ContainerPlanos>
          <TituloH3>Atende por Plano?</TituloH3>
          <SwitchToogle
            checked={planoEstaAtivado}
            onChange={handleToggleSwitch}
          />
          <p>Não/Sim</p>
        </ContainerPlanos>
        <TituloH3>Selecione os Planos:</TituloH3>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Sulamerica"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Unimed"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Bradesco"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Amil"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Biosaúde"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Biovida"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
          <FormControlLabel
            control={<Checkbox disabled={!planoEstaAtivado} />}
            label="Outro"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        </FormGroup>
        <BotaoCustomizado >Cadastrar</BotaoCustomizado>
      </BoxCustomizado>
    </Modal>
  );
}
