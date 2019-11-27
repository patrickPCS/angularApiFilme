import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';

import { ProdutoraComponent } from './produtora.component';
import { ProdutoraListComponent } from './produtora-list/produtora-list/produtora-list.component';
import { ProdutoraFormComponent } from './produtora-form/produtora-form.component';



@NgModule({
  declarations: [
    ProdutoraComponent,
    ProdutoraListComponent,
    ProdutoraFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [ProdutoraFormComponent, ProdutoraListComponent ]
})
export class ProdutoraModule { }
