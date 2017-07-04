import { Injectable } from '@angular/core';
import { HttpModule, Http, JsonpModule, Response, RequestOptions, Headers} from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Login } from '../login/login';

@Injectable()
export class LoginService {
	private loginurl = 'http://localhost/api/api.php?action=login';
	
	constructor (private http : Http) {}
  /*getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }*/

  checkLogin (formData) {
  	var postData = 'data=' + JSON.stringify(formData);

  	let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded; charset-UTF-8'});
	let options = new RequestOptions({headers : headers});

  	return this.http.post(this.loginurl, postData, options).map(res => res.json());
  }

  successhandle () {

  }

  errorHandle () {

  }
}