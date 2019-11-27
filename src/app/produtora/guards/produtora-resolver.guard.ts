import { ProdutoraService } from './../produtora.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produtora } from '../produtora';

@Injectable({
  providedIn: 'root'
})
export class ProdutoraResolverGuard implements Resolve<Produtora> {

  constructor(private service: ProdutoraService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produtora> {
    if (route.params && route.params['id']) {
      return this.service.carregarById(route.params['id']);
    }
    return of({
      id: null,
      nome: null,
      dataCriacao: null
    });
  }
 
  }
