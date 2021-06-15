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
  
    return this.http.get<Produto[]>('http://localhost:8080/produtos', this.token)
  }

  getByIdProdutos(id: number):Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produtos/${id}`,this.token)
  }

  findByDescricao(descricao: String): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/descricao/${descricao}`)
  }

  postProdutos(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produtos/cadastrar', produto, this.token)
  }

  putProdutos(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`http://localhost:8080/produtos`, produto, this.token)
  }

  deleteProdutos(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
  }

}
