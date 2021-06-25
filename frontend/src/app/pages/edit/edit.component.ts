import { ProdutosService } from './../../service/produtos.service';
import { Product } from './../../model/Product.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  produto:Product = {name:'', price:0, category:1};
  constructor(public alertController: AlertController, 
              private produtoService:ProdutosService, 
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe((parametros) => {
        if(parametros.id > 0)
        {
          this.produtoService.busca(parametros.id).subscribe((produtoEncontrado:Product) => this.produto = produtoEncontrado);
        }        
    });


  }

  async Salvar(){
    
    if(this.produto.name == "" || this.produto.price == 0 )
    {
        await this.presentAlert("Informe todos os campos");
    }
    else
    {
      if(this.produto.id)
      {        
        this.produtoService.editar(this.produto).subscribe((produto:Product) => this.presentAlertSalvo(produto));
      }
      else
      {
        this.produto.id = this.produtoService.lastId();
        this.produtoService.salvar(this.produto).subscribe((produto:Product) => this.presentAlertSalvo(produto));
      }
      
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

  async presentAlertSalvo(produto:Product) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso!',
      message: `Pizza <strong>${produto.name}</strong> salvo com sucesso!!!`,
      buttons: [
         {
          text: 'Continuar',
          handler: () => {
            this.router.navigate(['lista']);
          }
        }
      ]
    });

    await alert.present();
  }

}
