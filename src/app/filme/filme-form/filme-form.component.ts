import { ProdutoraService } from './../../produtora/produtora.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';


import { FilmeService } from './../filme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produtora } from 'src/app/produtora/produtora';

@Component({
    selector: 'app-filme-form',
    templateUrl: './filme-form.component.html',
    styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

    formulariaNovo: FormGroup;
    formProdutoras: FormGroup;
    submitted = false;

    //produtoras : Observable<Produtora[]>;
    produtoras: Produtora[];

    constructor(private formBuilder: FormBuilder,
        private service: FilmeService,
        private sericeProdutora: ProdutoraService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const filme = this.route.snapshot.data['filme'];
        const produtora = this.route.snapshot.data['produtora'];
        this.sericeProdutora.listaProdutora()
        .subscribe( dados => this.produtoras = dados);

        this.formulariaNovo = this.formBuilder.group({
            id: [filme.id],
            nome: [filme.nome, Validators.required],
            ano: [filme.ano, Validators.required],
            duracao: [filme.duracao, Validators.required],
            produtoraId: [null, Validators.required]
        });


        /*
        this.route.params
            .pipe(
                map((params: any) => params['id']),
                switchMap(id => this.service.carregarById(id))
            )
            .subscribe(filme => this.atualizarFormulario(filme));
        */



    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formulariaNovo.valid) {

            let produtoraId = this.formulariaNovo.value.produtoraId
            let msgSuccess = 'filme cadastrado';
            let msgError = 'error ao criar o filme, tente novamente mais tarde';
            if(this.formulariaNovo.value.id){
                msgSuccess = 'Filme atualizado com sucesso!';
                msgError = 'Error ao atualizado o filme, tente novamente mais tarde';
            }

            this.service.salvarFilme(this.formulariaNovo.value).subscribe(
                success => {
                    alert(msgSuccess);
                    console.log(this.formulariaNovo.value.produtoraId);
                    this.router.navigate(['filme/list']);
                },
                error =>{alert(msgError) },
                () => console.log('resquest completo')
            )
            /*
            if(this.formulariaNovo.value.id){
                this.service.updateFilme(this.formulariaNovo.value).subscribe(
                    success => { 
                        alert('atualizado cadastrado');
                        this.router.navigate(['filme/list']); },
                    error => alert('error ao atualizar o filme, tente novamente mais tarde'),
                    () => console.log('request completo')
                )
                // update
            }else{
                this.service.criarFilme(this.formulariaNovo.value).subscribe(
                    success => { 
                        alert('filme cadastrado');
                        this.router.navigate(['filme/list']); },
                    error => alert('error ao criar o filme, tente novamente mais tarde'),
                    () => console.log('request completo')
                );
                
                console.log(this.formulariaNovo.value);
            }*/
        } else {
            console.log(this.formulariaNovo.value);
            console.log(this.formulariaNovo)
            return;
        }

    }
    
    /*
    atualizarFormulario(filme) {
        this.formulariaNovo.patchValue({
            id: filme.id,
            nome: filme.nome,
            ano: filme.ano,
            duracao: filme.duracao
        });
    }
    */
}