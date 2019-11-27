
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Produtora} from './produtora';

@Injectable({
  providedIn: 'root'
})
export class ProdutoraService {

  private readonly API ='http://localhost:8080/produtoras';
  constructor(private http: HttpClient) { }

  listaProdutora() {
      return this.http.get<Produtora[]>(this.API).pipe(take(1));
  }

  carregarById(id) {
      return this.http.get<Produtora>(`${this.API}/${id}`).pipe(take(1));
  }

  private criarProdutora(produtora) {
      return this.http.post(this.API, produtora).pipe(take(1));
  }

  private updateProdutora(produtora){
      return this.http.put(`${this.API}/${produtora.id}`, produtora).pipe(take(1));
  }

  salvarProdutora(produtora){
      if(produtora.id){
          return this.updateProdutora(produtora);
      }else{
          return this.criarProdutora(produtora);
      }
  }

  remove(id){
      return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
