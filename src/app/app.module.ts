
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProdutoraModule } from './produtora/produtora.module';
import { FilmeModule } from './filme/filme.module';
import { CustomHttpInterceptor } from './custom-http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FilmeModule,
    HttpClientModule,
    ProdutoraModule
  ],
  providers: [
    CookieService
    //{provide:HTTP_INTERCEPTORS, useClass:CustomHttpInterceptor, multi:true},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
