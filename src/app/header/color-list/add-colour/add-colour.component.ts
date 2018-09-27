import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Color } from '../../color.model';



@Component({
  selector: 'app-add-colour',
  templateUrl: './add-colour.component.html',
  styleUrls: ['./add-colour.component.css']
})
export class AddColourComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('redInput') redInputRef: ElementRef;
  @ViewChild('greenInput') greenInputRef: ElementRef;
  @ViewChild('blueInput') blueInputRef: ElementRef;

  @Output() colorAdded = new EventEmitter<Color>();

  constructor() { }

  ngOnInit() {
  }

  onAddColor(){
    const colorName = this.nameInputRef.nativeElement.value;
    const redAmount = Number(this.redInputRef.nativeElement.value);
    const greenAmount = Number(this.greenInputRef.nativeElement.value);
    const blueAmount = Number(this.blueInputRef.nativeElement.value);
    const newColor = new Color(colorName, false, redAmount, greenAmount, blueAmount);
    this.colorAdded.emit(newColor);
  }
}
