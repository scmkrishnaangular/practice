import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state} from "@angular/animations";

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css'],
  animations : [trigger("divanimation", 
  [state("open", style({backgroundColor : "yellow", transform : "translateX(100px)", opacity : 0.5 })),
  state("close", style({backgroundColor : "red", transform : "translateX(-100px)" })),
  transition("* => open", animate("1000ms")),
  transition("open => close", animate("1000ms ease-out"))]
  )]
})
export class Sample1Component implements OnInit {

  currentstate="open"

  constructor() { }

  ngOnInit() {
  }

  handlestateChange() {
    this.currentstate = this.currentstate=="open" ? "close" : "open"
  }

}

