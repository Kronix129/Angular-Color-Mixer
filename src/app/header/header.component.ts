import { Component, OnInit, } from '@angular/core';
import { Color } from './color.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorSelected: Color;
  pickedColor: string;
  redAmount: number;
  greenAmount: number;
  blueAmount: number;

  stringRedAmount: string;
  stringGreenAmount: string;
  stringBlueAmount: string;

  rgb = 'rgb(0,0,0)';

  constructor() { 
    
  }

  ngOnInit() {
    this.redAmount = 0;
    this.greenAmount = 0;
    this.blueAmount = 0;
  }

  directiveString(){
    this.stringRedAmount = this.redAmount.toString();
    this.stringGreenAmount = this.greenAmount.toString();
    this.stringBlueAmount = this.blueAmount.toString();

    this.rgb = 'rgb(' +  this.stringRedAmount + ',' +  this.stringGreenAmount + "," + this.stringBlueAmount + ")"
  
  }
  selectedColor(event){
    this.colorSelected = event;
    this.colorSelected.selected = !this.colorSelected.selected;

    if(this.colorSelected.selected){
          this.redAmount += this.colorSelected.red;
          this.greenAmount += this.colorSelected.green;
          this.blueAmount += this.colorSelected.blue;
        } else {
          this.redAmount -= this.colorSelected.red;
          this.greenAmount -= this.colorSelected.green;
          this.blueAmount -= this.colorSelected.blue;
        }

    this.directiveString();
  }
}
