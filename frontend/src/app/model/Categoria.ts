import { Produto } from "./Produto"
import { User } from "./User"

export class Categoria{
    public id: number
    public nome: string
    public user: User[]
}