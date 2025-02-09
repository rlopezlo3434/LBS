import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { Pagina4Component } from './pages/pagina4/pagina4.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ResumenComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
