import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }


public login(model: any) {
  return this.http.post(`${environment.apiServer}/api/auth/login`, model)
  .pipe(
    map( (response: any) => {
      const user = response;
      if  (user) {
        localStorage.setItem('coreToken', user.token);
      }
    } )
  );
}
public register(model: any) {
  return this.http.post(`${environment.apiServer}/api/auth/register`, model);
}

}
