import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';
import { Sobre } from './sobre/sobre';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'produtos', component: Produtos},
  {path: 'sobre', component: Sobre},
  {path: 'produto-detalhe/:id', component: ProdutoDetalhe}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
