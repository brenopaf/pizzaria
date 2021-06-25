import { Product } from './../../model/Product.model';
import { ProdutosService } from './../../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public produtos: Product[];
  constructor(private produtoService: ProdutosService,
    private alertController: AlertController) { }

  ngOnInit() {

    this.produtoService.buscaTodos().then((resultProdutos: Product[]) => {
      this.produtos = resultProdutos;
    });

  }

  async excluir(produto:Product) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmação',
      message: `Deseja realmente excluir o item <strong>${produto.name}</strong> ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Excluir',
          handler: () => {
            this.produtoService.excluir(produto).subscribe((produtoRemovido:Product) => {
              this.presentAlert("Sucesso", `${produto.name} excluído com sucesso!!!`);

              this.produtos = this.produtos.filter((p:Product) => {return p.id != produto.id});
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(titulo:string, msg:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,      
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
   
  }

  atualizarLista(event) {
    this.produtoService.buscaTodos().then((listaProdutos:Product[]) => {
      this.produtos = listaProdutos;
      event.target.complete();
    });
  }


}
