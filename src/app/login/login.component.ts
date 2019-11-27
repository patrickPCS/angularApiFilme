import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor() {
  }
  /*
  
  credentials = {username: '', password: ''};
  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
  */
  ngOnInit() {
  }

}
