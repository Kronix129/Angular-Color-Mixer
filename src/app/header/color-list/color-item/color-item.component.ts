import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Color } from '../../color.model';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.css']
})
export class ColorItemComponent implements OnInit {
  @Input() color: Color;
  @Output() colorSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(event){
    this.colorSelected.emit();
    
    }

}
