import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-droupdown',
  templateUrl: './droupdown.component.html',
  styleUrls: ['./droupdown.component.css']
})
export class DroupdownComponent implements OnInit {
  public data: Array<string>;
  public data1: Array<string>;
  selName;
  constructor() {
    this.data = this.source.slice();
    this.data1 = this.source.slice();
  }
  public source: Array<string> = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
  public source1: Array<string>
 


  ngOnInit() {
  }
  handleFilter(value) {
    
        const selectedValue = this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        if (selectedValue.length > 0) {
        const selectedValue = this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        console.log("sele", selectedValue);
          this.selName = selectedValue[0];
        }
        
    }
    handleFilter1(value) {
      this.source1 = this.source.filter((item) =>  { return (item != this.selName ) } );
       this.data1 = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      // this.selName1 = selectedValue[0];
  }

}
