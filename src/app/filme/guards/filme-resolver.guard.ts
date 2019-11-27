import { FilmeService } from './../filme.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filme } from '../filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeResolverGuard implements Resolve<Filme> {

  constructor(private service: FilmeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Filme> {
    if (route.params && route.params['id']) {
      return this.service.carregarById(route.params['id']);
    }
    return of({
      id: null,
      nome: null,
      ano: null,
      duracao: null,
      produtora_id: null
    });
  }


}
