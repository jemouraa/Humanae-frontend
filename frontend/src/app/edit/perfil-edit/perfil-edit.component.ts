import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }
  
  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizarPerfil() {
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
        environment.token = ''
        environment.nome = ''
        environment.imagem = ''
        environment.id = 0

        this.router.navigate(['/entrar'])

      })
    }

}


}
