import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component {
  datos: any;

  constructor(private formularioService: FormularioService, private router: Router) {
      this.datos = this.formularioService.obtenerDatos();
      console.log(this.formularioService.obtenerJSON());
      // this.jsonData = this.formularioService.obtenerJSON();
  
      // this.opcionesFormateadas = this.jsonData.map(item => {
      //   let codigoStr = item.CODIGO.toString().padStart(9, '0');
      //   return `${item.CCPP} - ${codigoStr}`;
      // });
  
      this.formularioService.actualizarDatos(this.datos);
    }
}
