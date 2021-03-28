import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  listaRecibida:Lista;
  nombreItem:string;

  constructor(private router:Router, private deseoService:DeseosService, private activatedRoute:ActivatedRoute) {
    const idLista = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.listaRecibida = this.deseoService.obtenerLista(Number(idLista));
  }

  goHome() {
    this.router.navigate(['tabs/tab1']);
  }

  agregarItem() {
    if (this.nombreItem !== '') {
      const nuevoItem = new ListaItem(this.nombreItem);
      this.listaRecibida.items.push(nuevoItem);
      this.deseoService.guardarStorage();
      this.nombreItem = '';
    }

  }

  cambioCheck(item:ListaItem) {
    console.log(item);
  }

  ngOnInit() {
    
  }

}
