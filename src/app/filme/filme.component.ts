
import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {


  formularioFilme: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    
    ) { }

  ngOnInit() {
/* 
   this.formularioFilme = new FormGroup({
        nome: new FormControl(null),
        DataCriacao: new FormControl(null)
    });*/

   this.formularioFilme = this.formBuilder.group({
      nome:[null, Validators.required],
      ano:[null, Validators.required],
      duracao:[null, Validators.required]
    });
  }

  onSubmit(){
    console.log(this.formularioFilme.value);
    console.log(this.formularioFilme)
  }

}
