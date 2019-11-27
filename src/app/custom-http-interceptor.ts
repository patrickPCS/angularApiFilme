import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';


export class CustomHttpInterceptor {

}
/*
@Injectable()
implements HttpInterceptor  {
    constructor(
        private appService: AppService
    ){}
    intercept(){
        
    }
    

    
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
          req = req.clone({
            setHeaders: {
              Authorization: sessionStorage.getItem('basicauth')
            }
          })
        }
    
        return next.handle(req);
    }
      
}
*/ 