import { Component, OnInit, DoCheck ,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, DoCheck {

  totalAmount = 4500;

  stdids = [10,20,30]

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit() {}

  ngDoCheck () {
    console.log("Do Check called")
       this.cd.markForCheck();
}
  addId(e) {
    this.stdids.push(e.target.value);

    //this.stdids = Array.from(this.stdids);
  }

}
