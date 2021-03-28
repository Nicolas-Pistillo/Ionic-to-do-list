import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() { 
      this.cargarStorage()
  }

  crearLista(titulo:string) {
    let nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista(id:number) {
    return this.listas.find( listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      let datos = JSON.parse(localStorage.getItem('data'))
      this.listas = datos;
    }
  }

}
