import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';


@NgModule({
  declarations: [ListasComponent],
  imports: [
    CommonModule
  ],
  exports: [ // Definimos los componentes que se van a utlizar por fuera de este modulo
    ListasComponent
  ],
})
export class ComponentsModule { }
