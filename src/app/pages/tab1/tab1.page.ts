import { Component } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas:Lista[];

  constructor(private deseoService:DeseosService, private router:Router) {
      this.listas = this.deseoService.listas;
  }

  irAgregar() {
    this.router.navigate(['tabs/tab1/agregar']);
  }

}
