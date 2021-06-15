import { Produto } from "./Produto"

export class User {
    public id: number
    public nome: string
    public email: string
    public senha: string
    public causa: string
    public descricao: string
    public cnpj: string
	public endereco: string
    public conta: string
    public imagem: string
    public tipo: string
    public produto: Produto[]
}