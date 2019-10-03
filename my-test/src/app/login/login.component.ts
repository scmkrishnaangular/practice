import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators} from '@angular/forms';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router : Router) { }
  myFormGroup;
  ngOnInit() {
    
      this.formBuild();
  }
    formBuild(){
      this.myFormGroup = new FormGroup(
        {
          username : new FormControl("",[Validators.minLength(5),Validators.required]),
          password : new FormControl("",[Validators.minLength(8),Validators.required,])

        }
      )
    }
    useLogin(formData)
    {

      console.log("user name : "+ formData.username + " Password :  "+ formData.password)
      this.router.navigate(['newcust'])
      console.log("Page navigated");
    }
}
