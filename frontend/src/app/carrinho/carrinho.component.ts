import { Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto
  carrinho: Produto[]
  vParcial: number
  vTotal: number
  vazio: string
  quant: number
  carrinhoOb = {
    valor: 0
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.exibirCarrinho()
    this.total()
  }

  exibirCarrinho() {
    const localS = localStorage['carrinho']
    if (localS.length > 0) {
      this.carrinho = localS ? JSON.parse(localS) : []
    } else {
      this.vazio = "O Carrinho está vazio"
      this.vTotal = 0
    }
  }


  // userOb = {
  //   nome: '',
  //   user: '',
  //   senha: ''
  // }

  // let users = []
  // users = JSON.parse(localStorage.getItem('lista_users'))

  // users.forEach((i) => {

  //     userOb = {
  //       nome: i.nome,
  //       user: i.user,
  //       senha: i.senha
  //     }
  // })


  total() {
    this.vTotal = 0
    let dadosProd = []
    dadosProd = JSON.parse(localStorage.getItem('carrinho') || '{}')
    dadosProd.forEach((i: any) => {
      this.carrinhoOb = {
        valor: i.valorParcial
      }


      this.vTotal = this.carrinhoOb.valor + this.vTotal
    })
    return this.vTotal
  }

}
