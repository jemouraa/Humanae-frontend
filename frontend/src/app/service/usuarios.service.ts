
import { environment } from 'src/environments/environment.prod';
import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  user: User = new User

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllUsuario(): Observable<User[]> {
    return this.http.get<User[]>('https://doe-humanae.herokuapp.com/usuarios')
  }

  getByIdUsuario(id: number):Observable<User>{
    return this.http.get<User>(`https://doe-humanae.herokuapp.com/usuarios/${id}`)
  }

  getByCausa(causa: string):Observable<User[]>{
    return this.http.get<User[]>(`https://doe-humanae.herokuapp.com/causa/${causa}`)
  }

  postUsuario(usuario: User): Observable<User>{
    return this.http.post<User>('https://doe-humanae.herokuapp.com/usuarios', usuario, this.token)
  }

  putUsuario(usuario: User): Observable<User>{
    return this.http.put<User>('https://doe-humanae.herokuapp.com/usuarios', usuario, this.token)
  }

  deleteUsuario(id: number) {
    return this.http.delete(`https://doe-humanae.herokuapp.com/usuarios'/${id}`, this.token)
  }
}


