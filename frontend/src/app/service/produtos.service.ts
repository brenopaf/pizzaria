import { Product } from './../model/Product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl: string = 'http://localhost:3001/products/';
  produtos: Product[];
  constructor(private httpClient: HttpClient) { }

  buscaTodos(): Promise<Product[]> {
    return new Promise((resolve) => {

      this.httpClient.get(this.baseUrl).subscribe((result: Product[]) => resolve(result));

    });
  }

  salvar(produto: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, produto);
  }

  editar(produto: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl + produto.id, produto);
  }

  excluir(produto: Product): Observable<Product> {
    return this.httpClient.delete<Product>(this.baseUrl + produto.id);
  }

  lastId(): number {
    let id: number;
    this.buscaTodos().then((produtos: Product[]) => id = produtos[produtos.length - 1].id + 1);

    return id;
  }

  busca(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + id);
  }

}
