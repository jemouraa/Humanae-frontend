import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>('https://doe-humanae.herokuapp.com/produtos')
  }

  getByIdProdutos(id: number):Observable<Produto>{
    return this.http.get<Produto>(`https://doe-humanae.herokuapp.com/produtos/${id}` )
  }

  findByDescricao(descricao: String): Observable<Produto>{
    return this.http.get<Produto>(`https://doe-humanae.herokuapp.com/descricao/${descricao}`)
  }

  postProdutos(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://doe-humanae.herokuapp.com/produtos/cadastrar', produto, this.token)
  }

  putProdutos(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`https://doe-humanae.herokuapp.com/`, produto, this.token)
  }

  deleteProdutos(id: number) {
    return this.http.delete(`https://doe-humanae.herokuapp.com/produtos/${id}`, this.token)
  }

}
