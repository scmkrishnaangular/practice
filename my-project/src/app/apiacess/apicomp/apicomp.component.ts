import { Component, OnInit } from '@angular/core';
import { ApiserService } from '../apiser.service'
@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class ApicompComponent implements OnInit {
commentlist;
  constructor(private apiserv: ApiserService ) { }

  ngOnInit() {
    this.apiserv.getcomments().subscribe(data=>{
      console.log("Api Aerow function called")
      this.commentlist=data;});
  }

}
