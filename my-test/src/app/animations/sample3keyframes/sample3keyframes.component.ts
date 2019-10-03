import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate,style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-sample3keyframes',
  templateUrl: './sample3keyframes.component.html',
  styleUrls: ['./sample3keyframes.component.css'],
  animations : [
    trigger("imageAnimation" , [
    transition("* => move", animate("10000ms", 
       keyframes([style({transform : "translateX(100px)", offset : 0.25}), 
                  style({backgroundColor : "yellow", offset : 0.35}),
                  style({transform : "scale(1.2, 1.2) rotate(10deg)", offset : 0.40})])))
      ])
  ]
})
export class Sample3keyframesComponent implements OnInit {

  transitionState = "";

  constructor() { }

  ngOnInit() {
  }

  changeState(newState) {
    console.log("new state : " + newState);
    this.transitionState = newState;
  }

}
