import { Product } from './../../model/Product.model';
import { ProdutosService } from './../../service/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public produtos:Product[];
  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    
    this.produtoService.buscaTodos().then((resultProdutos:Product[]) => {
       this.produtos = resultProdutos;           
     });

   }

}
