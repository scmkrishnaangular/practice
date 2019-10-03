import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData;
  constructor(private userData: UserdataService) { }

  ngOnInit() {

    this.formData = new FormGroup ({
      registerInfo: this.userData.formBuild()
    });
  }

}
