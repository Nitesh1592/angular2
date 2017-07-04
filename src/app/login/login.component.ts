import { Component, OnInit } from '@angular/core';

import { Login } from './login';
import { LoginService } from '../services/login-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	LoginModel = new Login('', '');
  	constructor(private loginService : LoginService) { }

  	ngOnInit() {
  	}

  	onSubmit (formsData) {
  		this.loginService.checkLogin(formsData)
  			.subscribe(
  				data => data,
				err => err
			);
  	}
}
