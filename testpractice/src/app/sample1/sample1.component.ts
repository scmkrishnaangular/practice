import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {

  @Input("parentData")
  myTotalAmount : any;


  constructor() { }

  ngOnInit() {
    console.log("parent data : " + this.myTotalAmount);
  }

}
