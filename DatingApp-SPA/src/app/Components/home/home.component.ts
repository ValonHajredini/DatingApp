import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public registerMode = false;
  public values: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  public registerToggle() {
    this.registerMode = true;
  }


  getValues() {
    this.http.get(`${environment.apiServer}/api/values`).subscribe((values: any) => {
      this.values = values;
    }, error => {
      console.log('ERROR: ', error);
    });
  }
  cancleRegisterMode(registermode: boolean) {
      this.registerMode = registermode;
  }
}
