import { ProdutoraService } from './../../produtora.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtora } from '../../produtora';
import { Router } from '@angular/router';

@Component({
    selector: 'app-produtora-list',
    templateUrl: './produtora-list.component.html',
    styleUrls: ['./produtora-list.component.css']
})
export class ProdutoraListComponent implements OnInit {

    produtora$: Observable<Produtora[]>;

    constructor(
        private service: ProdutoraService,
        private router: Router
    ) { }

    ngOnInit() {

        this.onRefresh();
    }

    onRefresh(){
        this.produtora$ = this.service.listaProdutora();
    }
    onEdit(id){
        this.router.navigate(['/produtora/editar', id]);
    }
    onDelete(produtora) {
        this.service.remove(produtora.id).subscribe(
            success => {
                alert('produtora removido com sucesso!');
                this.onRefresh();
            },
            error =>{
                alert('erro ao remover produtora!');
                console.error();
            }
        );
    }
    
}
