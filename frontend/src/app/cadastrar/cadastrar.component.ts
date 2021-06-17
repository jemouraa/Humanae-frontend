import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {
  
  user: User = new User()
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
    console.log(this.tipoUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
    console.log(this.confirmarSenha)
  }

  cadastrar() {
      this.user.tipo = this.tipoUsuario
      if(this.user.senha !== this.confirmarSenha) {
        Swal.fire(
          "Senha Incorreta!",
          "Tente novamente!",
          "error"
        )

      } else {
          this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          console.log(this.user)
          this.router.navigate(['/home'])

          Swal.fire(
            "Sucesso",
            "Usuário cadastrado com sucesso!",
            "success",
          )
        })
      }

  }


}
