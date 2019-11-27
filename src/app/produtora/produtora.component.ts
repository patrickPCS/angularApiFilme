import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtora',
  templateUrl: './produtora.component.html',
  styleUrls: ['./produtora.component.css']
})
export class ProdutoraComponent implements OnInit {

  formularioProdutora: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formularioProdutora = this.formBuilder.group({
      nome: [null, Validators.required],
      dataCriacao: [null, Validators.required]
    });
  }

  onSubmit(){
    console.log(this.formularioProdutora.value);
    console.log(this.formularioProdutora)
  }

}
