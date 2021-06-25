import { Product } from './../../model/Product.model';
import { ProdutosService } from './../../service/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  quantidade:number;
  constructor(private produtoService:ProdutosService) { } 

  ngOnInit() {

    this.produtoService.buscaTodos().then((Produtos:Product[]) => this.quantidade = Produtos.length);
  }

  

}
