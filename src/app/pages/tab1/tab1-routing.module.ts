import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AgregarPage } from '../agregar/agregar.page';
import { AgregarPageModule } from '../agregar/agregar.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'agregar/:id',
    loadChildren: () => import('../agregar/agregar.module').then(m => AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
