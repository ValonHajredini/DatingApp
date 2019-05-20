import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  token  = localStorage.getItem('coreToken');
  decodetToken: any;
  constructor(private http: HttpClient) { }


  public login(model: any) {
    return this.http.post(`${environment.apiServer}/api/auth/login`, model)
    .pipe(
      map( (response: any) => {
        const user = response;
        if  (user) {
          localStorage.setItem('coreToken', user.token);
          this.token  = localStorage.getItem('coreToken');
          this.decodetToken = this.jwtHelper.decodeToken(this.token);
          console.log(this.decodetToken);
        }
      } )
    );
  }
  public register(model: any) {
    return this.http.post(`${environment.apiServer}/api/auth/register`, model);
  }

  public logedIn() {
    const token = localStorage.getItem('coreToken');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
