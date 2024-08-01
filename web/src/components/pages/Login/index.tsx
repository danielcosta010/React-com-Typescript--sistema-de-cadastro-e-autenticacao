import { useState } from "react";
import CampoDigitacao from "../../CampoDigitacao";
import Botao from "../../Botao";
import logo from "./logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BotaoCustomizado = styled(Botao)`
  width: 50%;
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
const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro);
`;
const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;
const LinkCustomizado = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Formulario>
        <CampoDigitacao
          valor={email}
          tipo="email"
          placeholder="Insira seu endereço de e-mail"
          onChange={setEmail}
          label="Email"
        />
        <CampoDigitacao
          valor={senha}
          tipo="password"
          placeholder="Insira sua senha"
          onChange={setSenha}
          label="Senha"
        />
        <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
      </Formulario>
      <Paragrafo>Esqueceu sua senha?</Paragrafo>
      <ParagrafoCadastro>
        Ainda não tem conta?{" "}
        <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado>
      </ParagrafoCadastro>
    </>
  );
}
