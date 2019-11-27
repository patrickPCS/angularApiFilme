import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient,
        private router: Router,
        private cookieService: CookieService) {
         }
    /*
    obtainAcesseToken(){
        let params = new URLSearchParams();
        params.append('username','patrick');
        params.append('password','patrick');
        params.append('grant_type', 'password');
        params.append('patrick', 'patrick');

        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("patrick" + ':' + "patrick") });

        this.http.post('http://localhost:8080/oauth/token',
        params.toString(), {headers}).pipe(
          map(
            userData => {
              sessionStorage.setItem('username', "patrick");
              let authString = 'Basic ' + btoa("patrick" + ':' + "patrick");
              sessionStorage.setItem('basicauth', authString);
              return userData;
            }
          )
        )

    }
    */
}
