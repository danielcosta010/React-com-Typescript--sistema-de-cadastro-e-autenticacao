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
import Subtitulo from "../../../components/Subtitulo";
import IProfissional from "../../../types/IProfissional";
import usePost from "../../../usePost";
import autenticaStore from "../../../stores/autentica.store";

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

const TextoSwich = styled.p`
  color: var(--cinza);
`;

const ContainerPlanos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
  margin-left: 50%;
  margin-top: 2em;
  transform: translate(-50%, -50%);
`;

// const CustomSwitch = styled(Switch)(
//   ({ theme }) => `

//   width: 200px;
// & .${switchClasses.root} {

// }
// `
// );

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
  const label = { inputProps: { "aria-label": "Atende por plano?" } };

  const [possuiPlano, setPossuiPlano] = useState(false);
  const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
  const { cadastrarDados } = usePost();
  const { usuario } = autenticaStore;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
        setPlanosSelecionados([...planosSelecionados, checkboxValue]);
    } else {
        setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
    }
};

  // Estado para o switch
  const [planoEstaAtivado, setEstaAtivado] = useState(false);

  const handleToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
        setPlanosSelecionados([...planosSelecionados, checkboxValue]);
    } else {
        setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
    }
    setEstaAtivado(!planoEstaAtivado);
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const profissional: IProfissional = {
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      possuiPlanoSaude: possuiPlano,
      estaAtivo: true,
      imagem: urlImagem,
      senha: senha,
      planoSaude: planosSelecionados,
      email: email,
      telefone: telefone,
      endereco: {
        cep: cep,
        rua: rua,
        estado: estado,
        numero: numero,
        complemento: complemento
      }
    }
    await cadastrarDados({ url: "especialista", dados: profissional, token: usuario.token})
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Formulário de cadastro de especialista"
      aria-describedby="Neste modal terá os dados de cadastro de especialista"
    >
      <BoxCustomizado>
        <Titulo>Cadastre o especialista inserindo os dados abaixo</Titulo>
        <form onSubmit={handleSubmit}>
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
            <Subtitulo>Atende por Plano?</Subtitulo>
            <Switch
              {...label}
              checked={planoEstaAtivado}
              onChange={handleToggleSwitch}
              sx={{
                width: 60, // Ajuste o valor conforme necessário
                height: 31, // Ajuste a altura se necessário
                padding: 0,
                "& .MuiSwitch-switchBase": {
                  padding: 2,
                  top: -12,
                  left: -12,
                  color: "grey.300",
                  "&.Mui-checked": {
                    transform: "translateX(28px)", // Ajuste conforme a largura
                    color: "light-blue",
                    "& + .MuiSwitch-track": {
                      opacity: 1,
                      backgroundColor: "#99b7e3",
                    },
                    "& .MuiSwitch-thumb": {
                      color: "#2a4571",
                    },
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: 23,
                  height: 23,
                },
                "& .MuiSwitch-track": {
                  borderRadius: 17,
                  backgroundColor: "grey.400",
                  opacity: 1,
                  transition: "background-color 0.2s",
                },
              }}
            />
            <TextoSwich>Não/Sim</TextoSwich>
          </ContainerPlanos>
          <Subtitulo>Selecione os Planos:</Subtitulo>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox disabled={!planoEstaAtivado} onChange={handleChange} value="Saulamerica" />
              }
              label="Sulamerica"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={<Checkbox disabled={!planoEstaAtivado} value="Unimed" />}
              label="Unimed"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={
                <Checkbox disabled={!planoEstaAtivado} value="Bradesco" />
              }
              label="Bradesco"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={<Checkbox disabled={!planoEstaAtivado} value="Amil" />}
              label="Amil"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={
                <Checkbox disabled={!planoEstaAtivado} value="Biosaúde" />
              }
              label="Biosaúde"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={
                <Checkbox disabled={!planoEstaAtivado} value="Biovida" />
              }
              label="Biovida"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
            <FormControlLabel
              control={<Checkbox disabled={!planoEstaAtivado} value="Outro" />}
              label="Outro"
              sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            />
          </FormGroup>
          <BotaoCustomizado>Cadastrar</BotaoCustomizado>
        </form>
      </BoxCustomizado>
    </Modal>
  );
}
