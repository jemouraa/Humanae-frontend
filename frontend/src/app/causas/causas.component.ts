import { User } from './../model/User';
import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-causas',
  templateUrl: './causas.component.html',
  styleUrls: ['./causas.component.css']
})
export class CausasComponent implements OnInit {

  user: User = new User
  listaUser : User[]

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.findAllUsers()
    console.log(this.findAllUsers)

  }

  findAllUsers(){
    this.usuariosService.getAllUsuario().subscribe((resp: User[])=>{
    this.listaUser = resp
  })

  }

}
