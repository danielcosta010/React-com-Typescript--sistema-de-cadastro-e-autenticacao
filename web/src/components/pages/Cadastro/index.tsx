import styled from "styled-components";
import logo from "./logo.png";
import CampoDigitacao from "../../CampoDigitacao";
import { useState } from "react";
import Botao from "../../Botao";
import { Step, StepLabel, Stepper } from "@mui/material";

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Imagem = styled.img`
  padding: 2em 0;
`;
const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;
const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;

interface PropsCustomizadas {
  cor: string;
}
const StepCustomizada = styled.div<PropsCustomizadas>`
  background-color: ${({ cor }) => cor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between
`;

export default function Cadastro() {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repitaSenha, setRepitaSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");

  const lidaSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEtapaAtiva(etapaAtiva + 1);
    console.log("çldjçs");
  };
  return (
    <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Stepper activeStep={etapaAtiva}>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomizada cor={props.active ? "lightblue" : "lightgray"} />
            )}
          />
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomizada cor={props.active ? "lightblue" : "lightgray"} />
            )}
          />
        </Step>
      </Stepper>
      <Titulo>Primeiro, alguns dados básicos</Titulo>
      {etapaAtiva === 0 ? (
        <>
          <Formulario onSubmit={lidaSubmit}>
            <CampoDigitacao
              tipo="text"
              valor={nome}
              placeholder="Digite seu nome"
              onChange={setNome}
              label="Nome"
            />
            <CampoDigitacao
              tipo="number"
              valor={cnpj}
              placeholder="Digite o CNPJ"
              onChange={setCnpj}
              label="CNPJ"
            />
            <CampoDigitacao
              tipo="email"
              valor={email}
              placeholder="Digite seu e-mail para login"
              onChange={setEmail}
              label="Email"
            />
            <CampoDigitacao
              tipo="password"
              valor={senha}
              placeholder="Digite sua senha"
              onChange={setSenha}
              label="Crie uma senha"
            />
            <CampoDigitacao
              tipo="password"
              valor={repitaSenha}
              placeholder="Repita a senha anterior"
              onChange={setRepitaSenha}
              label="Repita a senha"
            />
            <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
          </Formulario>
        </>
      ) : (
        <>
          <Formulario onSubmit={lidaSubmit}>
            <CampoDigitacao
              tipo="tel"
              valor={telefone}
              placeholder="(DDD) XXXX-XXXX"
              onChange={setTelefone}
              label="Telefone"
            />
            <CampoDigitacao
              tipo="number"
              valor={cep}
              placeholder="Insira o CEP"
              onChange={setCep}
              label="CEP"
            />
            <CampoDigitacao
              tipo="text"
              valor={rua}
              placeholder="Rua"
              onChange={setRua}
              label="Endereço"
            />
            <Container>
              <CampoDigitacao
                tipo="number"
                valor={numero}
                placeholder="Número"
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
            </Container>
            <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
          </Formulario>
        </>
      )}
    </>
  );
}
