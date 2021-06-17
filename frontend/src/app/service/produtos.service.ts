import { Product } from './../model/Product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl:string = 'http://localhost:3001/products/';
  produtos:Product[];
  constructor(private httpClient: HttpClient) { }

  buscaTodos():Promise<Product[]>
  {
    return new Promise((resolve) => {

      this.httpClient.get(this.baseUrl).subscribe((result:Product[]) => resolve(result));

    });
  }
}
