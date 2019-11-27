import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap, take } from 'rxjs/operators';

import { Filme } from './filme';
import { delay } from 'q';


@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    private readonly API = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    listaFilmes() {
        return this.http.get<Filme[]>(`${this.API}/filmes`).pipe(take(1));
    }

    carregarById(id) {
        return this.http.get<Filme>(`${this.API}/filmes/${id}`).pipe(take(1));
    }

    private criarFilme(filme) {
        return this.http.post(`${this.API}/produtoras/${filme.produtoraId}/filmes/${filme.id}`, filme).pipe(take(1));
    }

    private updateFilme(filme){
        return this.http.put(`${this.API}/produtoras/${filme.produtoraId}/filmes/${filme.id}`, filme).pipe(take(1));
    }

    salvarFilme(filme){
        if(filme.id){
            return this.updateFilme(filme);
        }else{
            return this.criarFilme(filme);
        }
    }

    remove(filme){
        return this.http.delete(`${this.API}/produtoras/${filme.produtora_id}/filmes/${filme.id}`).pipe(take(1));
    }
}
