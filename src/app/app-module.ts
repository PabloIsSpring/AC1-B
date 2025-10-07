import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';
import { Sobre } from './sobre/sobre';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { MenuSuperior } from './menu-superior/menu-superior';

@NgModule({
  declarations: [
    App,
    Home,
    Produtos,
    Sobre,
    ProdutoDetalhe,
    MenuSuperior
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
