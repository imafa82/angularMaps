import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MapComponent} from '../components/gmap';
import {FormsModule} from '@angular/forms';
import {TabbarComponent} from '../components/tabbar';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
      AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
