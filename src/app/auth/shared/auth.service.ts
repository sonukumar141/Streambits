import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
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

    constructor(private http: HttpClient) {
    	this.decodedToken = JSON.parse(localStorage.getItem('streambits_meta')) || new DecodedToken();
    }

    private saveToken(token: string): string{
	    
		this.decodedToken = jwt.decodeToken(token);
		localStorage.setItem('streambits_auth', token);
		localStorage.setItem('streambits_meta', JSON.stringify(this.decodedToken));

		return token;
	}

	private getExpiration(){
		return moment.unix(this.decodedToken.exp);
	}
	
	public signup(userData: any): Observable<any>{

		return this.http.post('api/v1/users/signup', userData);
	}

	public login(userData: any): Observable<any>{

		return this.http.post('api/v1/users/auth', userData).map(
		(token: string) => this.saveToken(token));

	}

	public isAuthenticated(): boolean {
		return moment().isBefore(this.getExpiration());
	}


}