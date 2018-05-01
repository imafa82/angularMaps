import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MapComponent} from '../components/gmap';
import {FormsModule} from '@angular/forms';
import {TabbarComponent} from '../components/tabbar';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TabbarComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
