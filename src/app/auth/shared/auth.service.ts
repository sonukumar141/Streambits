import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/Rx';
const jwt = new JwtHelperService();

class DecodedToken {
	exp: number = 0;
	username: string ='';
}

@Injectable()
export class AuthService{

    private decodedToken;

    constructor(private http: HttpClient) {}
	
	public signup(userData: any): Observable<any>{

		return this.http.post('api/v1/users/signup', userData);
	}

	public login(userData: any): Observable<any>{

		return this.http.post('api/v1/users/auth', userData).map(
		(token: string) => this.saveToken(token));

	}

	private saveToken(token: string): string{
	    debugger;
		this.decodedToken = jwt.decodeToken(token);
		localStorage.setItem('streambits_auth', token);
		localStorage.setItem('streambits_meta', JSON.stringify(this.decodedToken));

		return token;
	}
}