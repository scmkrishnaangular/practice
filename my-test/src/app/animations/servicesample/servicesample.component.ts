import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-servicesample',
  templateUrl: './servicesample.component.html',
  styleUrls: ['./servicesample.component.css']
})
export class ServicesampleComponent implements OnInit {
  id = 1;
  stdname = "Sample Name";
  constructor(private sampleService: SampleService) { }

  ngOnInit() {
  }

 

  addStudent() {

    let newstdname =  this.stdname + this.id;

    let student  = {id : this.id++,name : newstdname};

    this.sampleService.addStudent(student);
  }

}
