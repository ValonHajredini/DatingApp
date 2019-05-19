import { AuthService } from './../../_Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Loged In Sucesfully')
    }, error => {
      console.log('Faild to login')
    });
  }

  public logedIn() {
    const token = localStorage.getItem('coreToken');
    return !!token;
  }
  public logout() {
    localStorage.removeItem('coreToken');
    console.log('Loged Out');
  }

}
