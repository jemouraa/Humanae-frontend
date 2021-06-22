import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`
/categoria`,this.token)
  }

  getByIdCategoria(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(`https://doe-humanae.herokuapp.com/categoria/${id}`,this.token)
  }

  getByNome(nome: String):Observable<Categoria>{
    return this.http.get<Categoria>(`https://doe-humanae.herokuapp.com/nome/${nome}`,this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://doe-humanae.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://doe-humanae.herokuapp.com/categoria', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://doe-humanae.herokuapp.com/categoria/${id}`, this.token)
  }
}
