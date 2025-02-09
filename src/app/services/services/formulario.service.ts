import { Injectable } from '@angular/core';

interface DatosJSON {
  DPTO: string;
  PROV: string;
  DIST: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  datos: any = {
    projectName: '',
    departamentoSeleccionado: '',
    provinciaSeleccionada: '',
    distritoSeleccionado: '',
    detalleProyecto: '',
    aisdComponente1: '',
    aisdComponente2: '',
    aisiComponente1: '',
    aisiComponente2: '',
    seleccionados: [],
    seleccionadosAISI: [],

  };

  jsonData: any[] = [];

  actualizarDatos(nuevosDatos: any) {
    this.datos = { ...this.datos, ...nuevosDatos };
  }

  obtenerDatos() {
    return this.datos;
  }

  // 📌 Método para guardar el JSON en el servicio
  guardarJSON(data: any) {
    this.jsonData = data;
  }

  // 📌 Método para obtener el JSON almacenado
  obtenerJSON(): DatosJSON[] {
    return this.jsonData;
  }

}
