import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName: string;
  password: string;

  constructor(private rota: Router) { }

  login() {
   sessionStorage.setItem('userName', this.userName);

   this.rota.navigate(['home']);   
  }

  

}
