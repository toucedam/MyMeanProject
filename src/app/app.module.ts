import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
