import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AgregarPage } from '../agregar/agregar.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'agregar/:id',
    component: AgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
