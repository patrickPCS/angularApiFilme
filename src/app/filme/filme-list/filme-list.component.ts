import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
//import { NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-filme-list',
    templateUrl: './filme-list.component.html',
    styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

    //filmes : Filme[];

    filmes$: Observable<Filme[]>;

    constructor(
        private service: FilmeService,
        private router: Router

    ) { }

    ngOnInit() {
        //this.service.listaFilmes().subscribe(console.log)

        // this.service.listaFilmes().subscribe(dados => this.filmes = dados )

        
        this.onRefresh();
    }
    onRefresh(){
        this.filmes$ = this.service.listaFilmes();
    }
    onEdit(id) {
        this.router.navigate(['filme/editar', id]);
    }
    onDelete(filme) {
        this.service.remove(filme).subscribe(
            success => {
                alert('filme removido com sucesso!');
                this.onRefresh();
            },
            error =>{
                alert('erro ao remover filme!');
                console.error();
            }
        );
    }
    
}
