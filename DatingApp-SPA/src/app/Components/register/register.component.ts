import { AlertifyService } from './../../_Services/alertify.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from './../../_Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancleRegister = new EventEmitter();
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  public register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe((respoonse: any) => {
        this.alertify.success(respoonse);
    }, error => {
      this.alertify.error(error);
    })
  }
  public cancle() {
    this.cancleRegister.emit(false);
    console.log('Cancle');
  }

}
