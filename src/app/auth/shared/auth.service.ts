import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class AuthService{

  constructor(private http: HttpClient) {}
	
	public signup(userData: any): Observable<any>{

		return this.http.post('api/v1/users/signup', userData);
	}

	public login(userData: any): Observable<any>{

		return this.http.post('api/v1/users/auth', userData).map(
		(token: string) => this.saveToken(token));

	}

	private saveToken(token: string): string{
		localStorage.setItem('streambits_auth', token);

		return token;
	}
}