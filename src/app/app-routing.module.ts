import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeComponent } from './filme/filme.component';
import { ProdutoraListComponent } from './produtora/produtora-list/produtora-list/produtora-list.component';
import { ProdutoraFormComponent } from './produtora/produtora-form/produtora-form.component';
import { ProdutoraResolverGuard } from './produtora/guards/produtora-resolver.guard';
import { FilmeResolverGuard } from './filme/guards/filme-resolver.guard';
import { FilmeFormComponent } from './filme/filme-form/filme-form.component';
import { AppComponent } from './app.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { ProdutoraComponent } from './produtora/produtora.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'produtora/list', component: ProdutoraListComponent },
    {
        path: 'produtora/editar/:id', component: ProdutoraFormComponent,
        resolve: {
            produtora: ProdutoraResolverGuard
        }
    },
    {
        path: 'produtora/novo', component: ProdutoraFormComponent,
        resolve: {
            produtora: ProdutoraResolverGuard
        }
    },
    { path: 'filme/list', component: FilmeListComponent },
    {
        path: 'filme/editar/:id', component: FilmeFormComponent,
        resolve: {
            filme: FilmeResolverGuard
        }
    },
    {
        path: 'filme/novo', component: FilmeFormComponent,
        resolve: {
            filme: FilmeResolverGuard
        }
    },
    { path: '', pathMatch: 'full', redirectTo: 'produtora/list' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
