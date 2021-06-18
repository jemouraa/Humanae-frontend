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

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
    console.log(this.confirmarSenha)
  }

  cadastrar() {
      if(this.user.senha !== this.confirmarSenha) {
        Swal.fire({
          icon: 'error',
          title: "Senha Incorreta!",
          text: "Tente novamente!",
          confirmButtonColor: '#FECE2D'
        })

      } else {
          this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          console.log(this.user)
          this.router.navigate(['/home'])

          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text:  "Usuário cadastrado com sucesso!",
            confirmButtonColor: '#FECE2D'
          })
        })
      }

  }


}
