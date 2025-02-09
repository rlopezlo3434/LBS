import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { Pagina4Component } from './pages/pagina4/pagina4.component';

const routes: Routes = [
  { path: 'documento', component: DocumentosComponent }, 
  { path: 'resumen', component: ResumenComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },

  { path: '', redirectTo: 'documento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
