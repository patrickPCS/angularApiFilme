import { AppRoutingModule } from './../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeComponent } from './filme.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';


@NgModule({
  declarations: [
    FilmeComponent,
    FilmeListComponent,
    FilmeFormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [FilmeListComponent, FilmeFormComponent]
})
export class FilmeModule { }
