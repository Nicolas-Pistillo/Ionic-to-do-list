import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(private deseosService: DeseosService,private router:Router,private alertCtrl:AlertController) {}

  async agregar() {

    const alert = await this.alertCtrl.create({
      header: 'Agregar nueva lista',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Crear',
        handler: (data) => {
          if (data.titulo.length === 0 ) {
            return;
          } else {
            let listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
          }
        }
      }],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Escribe el nombre aqui'
        }]
    })
    
    alert.present();
  }
}