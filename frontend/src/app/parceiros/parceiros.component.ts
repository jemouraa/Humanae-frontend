
import { Produto } from './../model/Produto';
import { AuthService } from './../service/auth.service';
import { UserLogin } from './../model/UserLogin';
import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { User } from '../model/User';
import { ProdutosService } from '../service/produtos.service';
import { identity } from 'rxjs';


@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit{

  user: User = new User()
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  listaUser: User[]
  userLogin: UserLogin = new UserLogin

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private usuarioService: UsuariosService,
    public authService: AuthService,
    public route: ActivatedRoute


  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
   this.findByIdUser(id)
  }

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faHeart = faHeart;
  faCircleInfo = faInfoCircle



  findByIdUser(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  cadastrarProdutos() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.produto.usuario = this.user
    console.log(this.produto)

    this.produtoService.postProdutos(this.produto).subscribe((resp: Produto)=> {
        this.produto = resp
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Produto cadastrado com sucesso!',
          confirmButtonColor: '#FECE2D'
        })
        this.produto = new Produto


    })
    this.findByIdUser(this.user.id)
  }
}
