import { Produto } from './../../model/Produto';
import { ProdutosService } from './../../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto()

constructor(
private produtoService: ProdutosService,
private router: Router,
private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Sua sessão expirou!',
        confirmButtonColor: '#FECE2D'
      })
      this.router.navigate(['/home']);
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto)=>{
     this.produto = resp
    })

  }

  atualizarProdutos(){
    this.produtoService.postProdutos(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Produto atualizado com sucesso!',
        confirmButtonColor: '#FECE2D'
      })

    })
    this.findByIdProduto
   }

}
