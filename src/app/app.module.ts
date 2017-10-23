import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { InserirComponent } from './lista/inserir/inserir.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AdicionarComponent,
    InserirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
