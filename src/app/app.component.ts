import { Component } from '@angular/core';
import {Country} from '../models/country';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  countries: Country[]= [
      {id: 1001, name: 'Italia', lat: 42, lng: 12},
      {id: 1002, name: 'Stati Uniti', lat: 111, lng: 33},
      {id: 1003, name: 'Gibilterra', lat: 11, lng: 44}
  ]
  myLat: number;
  myLng: number;
  currentCountry: Country;
  constructor(private http:HttpClient){
    this.http.get('http://localhost:3000/countries')
        .subscribe( (res: Country[]) =>{
          this.countries = res;
            this.currentCountry = this.countries[0];
        });
  }
    test(){
    console.log(this.myLng, this.myLat);
    }
    selectCountry(country){
      this.currentCountry = country;
    }
}
