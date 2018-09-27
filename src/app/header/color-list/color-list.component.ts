import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Color } from '../color.model';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  @Input() rgb: string;
  @Input() redAmount: number;
  @Input() greenAmount: number;
  @Input() blueAmount: number;

  @Output() colorWasSelected = new EventEmitter<Color>();
  // @Output() colorSelected = new EventEmitter<void>()
  colors: Color[] = [
    new Color("Green", false, 0, 255, 0),
    new Color("Red", false, 255, 0, 0),
    new Color("Blue", false, 0, 0, 255),
    new Color("Purple", false, 128, 0, 128),
    new Color("Orange", false, 255, 165, 0),
    new Color("Teal", false, 0, 181, 173)
  
  ];  
  
  constructor() { }

  ngOnInit() {
  }

  onColorSelected(color: Color){
    this.colorWasSelected.emit(color); 
  }

  onColorAdded(color: Color){
    this.colors.push(color);
  }
}
