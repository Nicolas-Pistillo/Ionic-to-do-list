import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListasComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [ // Definimos los componentes que se van a utlizar por fuera de este modulo
    ListasComponent
  ],
})
export class ComponentsModule { }
