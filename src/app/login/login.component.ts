import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../utils/services/authentication.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private router: Router, private authenticationService: AuthenticationService ) { 
  }

  login(){
  this.authenticationService.acessoCidadaoSignIn();
  }

}
