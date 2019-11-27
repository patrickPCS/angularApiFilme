import { ProdutoraService } from './../produtora.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-produtora-form',
    templateUrl: './produtora-form.component.html',
    styleUrls: ['./produtora-form.component.css']
})
export class ProdutoraFormComponent implements OnInit {

    formulariaNovo: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private service: ProdutoraService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const produtora = this.route.snapshot.data['produtora'];

        this.formulariaNovo = this.formBuilder.group({
            id: [produtora.id],
            nome: [produtora.nome, Validators.required],
            dataCriacao: [produtora.dataCriacao, Validators.required],
        });
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formulariaNovo.valid) {


            let msgSuccess = 'Produtora cadastrado';
            let msgError = 'error ao criar o Produtora, tente novamente mais tarde';
            if(this.formulariaNovo.value.id){
                msgSuccess = 'Produtora atualizado com sucesso!';
                msgError = 'Error ao atualizado o Produtora, tente novamente mais tarde';
            }

            this.service.salvarProdutora(this.formulariaNovo.value).subscribe(
                success => {
                    alert(msgSuccess);
                    this.router.navigate(['produtora/list']);
                },
                error =>{alert(msgError) },
                () => console.log('resquest completo')
            )
        } else {
            console.log(this.formulariaNovo.value);
            console.log(this.formulariaNovo)
            return;
        }

    }

}
