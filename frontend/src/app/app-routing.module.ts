import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CausasComponent } from './causas/causas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { PerfilEditComponent } from './edit/perfil-edit/perfil-edit.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'parceiros/:id', component: ParceirosComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'causas', component: CausasComponent},
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'perfil-edit/:id', component: PerfilEditComponent},
  {path: 'menu', component: MenuComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
