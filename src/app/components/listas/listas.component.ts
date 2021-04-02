import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public deseosService:DeseosService, private router:Router) { }

  verItems(id:number) {

    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${id}`);
    }

  }

  ngOnInit() {}

}
