
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

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit{

  user: User = new User()
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  userLogin: UserLogin = new UserLogin
  idUser = environment.id
  nome = environment.nome
  imagem = environment.imagem
  descricao = environment.descricao
  causa = environment.causa

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private usuarioService: UsuariosService,
    public authService: AuthService


  ) { }

  ngOnInit() {
    window.scroll(0,0)

   this.findByIdUser();
    //console.log(id)
  }

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faHeart = faHeart;
  faCircleInfo = faInfoCircle

  findByIdUser(){
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: User) => {
      this.user = resp

    })
  }

  cadastrarProdutos() {
    this.user.id = environment.id
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
        this.findByIdUser()
    })
  }
  //comprar(){
    //this.produtoCompra = environment.produto
    //this.produtoService.getByIdProdutos(this.produto.id).subscribe((resp: Produto) => {
     // this.produto = resp
 // })
//}
}
