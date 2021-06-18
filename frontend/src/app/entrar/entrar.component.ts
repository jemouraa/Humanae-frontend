import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2'
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.imagem = this.userLogin.imagem
      environment.id = this.userLogin.id
      environment.causa = this.userLogin.causa
      environment.descricao = this.userLogin.descricao
      environment.email = this.userLogin.email
      environment.tipo = this.userLogin.tipo

      if(this.userLogin.tipo == 'doador') {
        this.router.navigate(['/causas'])
      } else {
        console.log(environment);
        this.router.navigate(['/parceiros/id'])
      }

    },error=>{
      if( error.status == 500 ){
        Swal.fire({
          icon: 'warning',
          title: 'Atenção',
          text: 'Usuário ou senha incorretos!'
        })

    }}
    )
  }

}

