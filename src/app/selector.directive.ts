import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appSelector]'
})

export class SelectorDirective{
    @HostBinding('class.active') isSelected = false;
    @HostListener('click') toggleSelected(){    
        this.isSelected = !this.isSelected;
    }
}