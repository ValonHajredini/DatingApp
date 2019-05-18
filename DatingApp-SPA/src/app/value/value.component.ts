import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  getValues() {
    this.http.get(`${environment.apiServer}/api/values`).subscribe((values: any) => {
      console.log('values: ', values);
      this.values = values;
    }, error => {
      console.log('ERROR: ', error);
    });
  }
}
