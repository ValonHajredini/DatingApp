import { AlertifyService } from './../../_Services/alertify.service';
import { AuthService } from './../../_Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  public username: string = '';
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getUsername();
  }

  public login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Loged In Sucesfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  

  public logedIn() {
    const token = localStorage.getItem('coreToken');
    return !!token;
  }
  public logout() {
    localStorage.removeItem('coreToken');
    this.alertify.message('Loged Out');
  }
  getUsername() {
    if(this.logedIn()) {
      // const dToken = this.authService.getUsername();
      // this.username = dToken.unique_name;
    }
    
  }

}
