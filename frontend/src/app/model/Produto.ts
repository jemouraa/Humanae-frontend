import { User } from "./User"

export class Produto{
    public id: number
    public nome: string
    public preco: number
    public imagem: string
    public quantidade: number
    public descricao: string
    public usuario: User
    
    public valorParcial: number
}
