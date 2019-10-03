import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orderList;
  constructor( private activatedRoute : ActivatedRoute) { 


    this.orderList= this.activatedRoute.snapshot.data["orderlist"];
    console.log("order list " + this.orderList);
  }

  ngOnInit() {


  }

}
