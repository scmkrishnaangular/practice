import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css'],
  animations : [
    trigger("imageAnimation", [
      state("move", style({transform : "translate(100px, 100px)"})),
      // state("scale", style({transform : "scale(1.5, 1.5)  translateX(100px)"})),
      state("scale", style({transform : " rotate(180deg)"})),
      transition("* => move", animate("1000ms")),
      transition("* => scale", animate("1000ms"))
    ])
  ]
})
export class Sample2Component implements OnInit {

  transitionState = "";

  constructor() { }

  ngOnInit() {
  }

  changeState(newState) {
    console.log("new state : " + newState);
    this.transitionState = newState;
  }

@HostListener("mouseover")
changemystate()
{
this.changeState('scale')
}
}
