//import { finally } from 'rxjs/add/operator/finally';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {finally} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    
  }
  /*
  private app: AppService, private http: HttpClient, private router: Router
  this.app.authenticate(undefined, undefined);
  logout() {
    this.http.post('logout', {}).finally(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    }).subscribe();
  }
  */
}
