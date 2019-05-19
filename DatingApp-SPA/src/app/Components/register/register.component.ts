import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from './../../_Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancleRegister = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public register() {
    console.log(this.model);
  }
  public cancle() {
    this.cancleRegister.emit(false);
    console.log('Cancle');
  }

}
