import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
 
  produtos: Produto = new Produto()
  idProd: number

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
        text: 'Sua sessão expirou!'
      })
      this.router.navigate(['/home']);
    }

   this.idProd = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProd)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto)=>{
     this.produtos = resp 
    })

  }

  apagarProdutos(){
   
    this.produtoService.deleteProdutos(this.idProd).subscribe(() =>{
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: "Este produto foi apagado!",
        confirmButtonColor: '#FECE2D'
      })
      this.router.navigate(['/parceiros/id']);
    })
   }

}



