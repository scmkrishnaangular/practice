import { Injectable } from '@angular/core';
// import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  studentList : Student[] = [];

  constructor() { }

  addStudent(student : Student) {
    console.log("Before addition student list : " + JSON.stringify(this.studentList ));
    this.studentList.push(student);
    console.log("Post additon student list : " + JSON.stringify(this.studentList ));
  }
  
}
export class Student {
  id;
  name;
}
