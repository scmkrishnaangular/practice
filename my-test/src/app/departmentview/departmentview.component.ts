import { Component, OnInit,DoCheck,ChangeDetectorRef,ChangeDetectionStrategy} from '@angular/core';
import { HospitalService } from '../hospitalview/hospital.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-departmentview',
  templateUrl: './departmentview.component.html',
  styleUrls: ['./departmentview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentviewComponent implements OnInit, DoCheck {
  departmentlist;
  routvalue;
  hospitalName;
 clickState = true;
  constructor(private hopitalservice: HospitalService, private routes: Router,
    private activateroute : ActivatedRoute, private cd : ChangeDetectorRef ) {

    this.getDepartmentList();
  }

  ngOnInit() {
    this.activateroute.queryParams.subscribe(prams => {
     this.hospitalName = prams["hospitalname"];
    });
    console.log("hospin name form params "+ this.hospitalName)
  }
  ngDoCheck()   {
    // this.cd.detach();
    // this.cd.detectChanges();
    this.cd.reattach();
    // this.departmentlist = Array.from(this.departmentlist);
    console.log("after changes do check");
    
  }

  getDepartmentList()
  {
    
  this.departmentlist = this.hopitalservice.departments;

  }

  backClick()
  {
    // this.routes.navigate([""],{queryParams :{hospitalname : "my hospital"} })
    this.routes.navigate(['']);
  }

  handleSort()
  {
  
  if (this.clickState === true)  {
    this.departmentlist.sort((a, b) => a.departmentname.localeCompare(b.departmentname))
    // console.log("sorted" + JSON.stringify(this.departmentlist));
    // this.departmentlist = Array.from(this.departmentlist);
    this.clickState = false;
    return this.departmentlist;

  }  else {
    this.departmentlist.sort((a, b) => b.departmentname.localeCompare(a.departmentname))
    // console.log("sorted" + JSON.stringify(this.departmentlist));
    // this.departmentlist = Array.from(this.departmentlist);
    this.clickState = true;
    return this.departmentlist;
  }

  }

}
