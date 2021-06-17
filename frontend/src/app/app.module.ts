import { CausasComponent } from './causas/causas.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { TimeComponent } from './home/time/time.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { PerfilEditComponent } from './edit/perfil-edit/perfil-edit.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    ParceirosComponent,
    CarrinhoComponent,
    CadastrarComponent,
    EntrarComponent,
    ParceirosComponent,
    RodapeComponent,
    HomeComponent,
    TimeComponent,
    ContatoComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    PerfilEditComponent,
    NavegacaoComponent,
    CausasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
