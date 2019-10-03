import { Component, OnInit } from '@angular/core';
import { transition, trigger, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-samplestagger',
  templateUrl: './samplestagger.component.html',
  styleUrls: ['./samplestagger.component.css'], 
  animations : [trigger("imgAnimation", [
    transition ("* => *", [
      query("img", 
        stagger("1500ms", 
          animate("1000ms", style({transform : "translateX(100px)"}))))
])
])]
})
export class SamplestaggerComponent implements OnInit {

  imageURLs=["assets/images/rose.jpg","assets/images/rose1.jpg",
  "assets/images/rose2.jpg", "assets/images/rose3.jpg"];


  constructor() { }

  ngOnInit() {
  }

  addURL() {
    this.imageURLs.push("assets/images/rose4.jpg")
  }
}
