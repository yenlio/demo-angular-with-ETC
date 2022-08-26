import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemformComponent} from './Item-form/Item-form.component'
import {ItemComponent} from "./Item/Item.component"

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,ItemformComponent,ItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
