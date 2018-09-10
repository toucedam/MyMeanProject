import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms'
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMaterialComponent } from './sidebar-material/sidebar-material.component';
import { MockData} from './api-memory.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,   
    HeaderComponent,
    InputComponent,
    FooterComponent,
    SidebarComponent,
    SidebarMaterialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
