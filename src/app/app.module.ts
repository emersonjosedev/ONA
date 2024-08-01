import { NgModule } from '@angular/core';

import { MenuPortifolioModule } from './modules/menu-portifolio/menu-portifolio.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulosExternosModule } from './modules/modulos-externos/modulos-externos.module';
import { TextosComponent } from './components/textos/textos.component';




@NgModule({
  declarations: [AppComponent, TextosComponent, ],
  imports: [AppRoutingModule, MenuPortifolioModule, ModulosExternosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
