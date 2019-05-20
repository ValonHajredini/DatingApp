import { AuthService } from './_Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('coreToken');
    if (token) {
      this.authService.decodetToken = this.jwtHelper.decodeToken(token);
    }
  }
}
