import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( 'lista' ) lista:IonList;
  @Input() terminada:boolean = true;

  constructor(public deseosService:DeseosService, private router:Router, public alertCtrl:AlertController) { }

  verItems(id:number) {

    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${id}`);
    }

  }

  async modificar(lista:Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Cambiar nombre de lista',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => this.lista.closeSlidingItems()
      },
      {
        text: 'Modificar',
        handler: (data) => {
          if (data.titulo.length === 0 ) {
            return;
          } else {
            this.deseosService.cambiarNombre(lista.id,data.titulo);
            this.lista.closeSlidingItems();
          }
        }
      }],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Escribe el nombre aqui'
        }]
    })
    
    alert.present();
  }

  ngOnInit() {}

}
