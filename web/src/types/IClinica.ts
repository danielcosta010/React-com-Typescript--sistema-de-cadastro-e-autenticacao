import IEndreco from "./IEndereco";

export default interface IClinica {
  email: string,
  nome: string,
  senha: string,
  endereco: IEndreco
}