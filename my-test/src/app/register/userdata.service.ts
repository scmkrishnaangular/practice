import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  formBuild(): FormGroup {
    const myForms = new FormGroup({
      firstName: new FormControl('krishna'),
      middleName: new FormControl('kumar'),
      lastName: new FormControl('r'),
      userId: new FormControl(),
      passWord: new FormControl(),
      email: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipCode: new FormControl()
    });
    return myForms;
  }
}
