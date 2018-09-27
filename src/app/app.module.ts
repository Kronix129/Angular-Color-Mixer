import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectorDirective } from './selector.directive';
import { TopLabelComponent } from './top-label/top-label.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ColorListComponent } from './header/color-list/color-list.component';
import { ColorItemComponent } from './header/color-list/color-item/color-item.component';
import { FormsModule } from '@angular/forms';
import { AddColourComponent } from './header/color-list/add-colour/add-colour.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectorDirective,
    TopLabelComponent,
    ColorListComponent,
    ColorItemComponent,
    AddColourComponent
    
    
  ],
  imports: [
    SuiModule,
    BrowserModule, 
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
