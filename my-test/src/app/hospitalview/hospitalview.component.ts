import { Component, OnInit, Output } from '@angular/core';
import { HospitalService } from './hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitalview',
  templateUrl: './hospitalview.component.html',
  styleUrls: ['./hospitalview.component.css']
})
export class HospitalviewComponent implements OnInit {
  hospitallist;
  clickState = true;
  constructor(private hopitalservice : HospitalService, private router : Router) { 
    this.getHospitallist();
  }

  ngOnInit() {

  }
  
  
  getHospitallist()
  {
    this.hospitallist = this.hopitalservice.hospitals;
    console.log("serverive call" + this.hopitalservice.hospitals)
  }
  handleSortHospitalName()
  {
    if (this.clickState === true)
    {
      this.hospitallist.sort((a,b)=>a.hospitalname.localeCompare(b.hospitalname));
      this.hospitallist=Array.from(this.hospitallist);
      this.clickState=false;
      return this.hospitallist;
    }
    else
    {
      this.hospitallist.sort((a,b)=>b.hospitalname.localeCompare(a.hospitalname));
      this.hospitallist = Array.from(this.hospitallist);
      this.clickState = true;
      return this.hospitallist;
    }
  }
  handlePageChange(e)
  {
    this.router.navigate(["/departmentview"], {queryParams : {hospitalname : e.target.id}} )

    console.log("table id " + e.target.id);
  }
}
