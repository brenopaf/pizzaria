import { Product } from './../../model/Product.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  produto:Product = {name:'', price:0, category:1};
  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async Salvar(){
    
    if(this.produto.name == "" || this.produto.price == 0 )
    {
        await this.presentAlert("Informe todos os campos");
    }
    else
    {
      console.log('Salvar');
    }
  }

  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: 'Campos inválidos',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
