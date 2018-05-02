import {Component, Input} from '@angular/core';

@Component({
  selector: 'gmap',
  template: `<div>
                <img src="http://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lng}}&zoom={{zoom}}&size={{width}}x{{height}}" alt="mappa">
            <i class="fa fa-plus-circle" (click)="zoom = zoom + 1"></i>
            <i class="fa fa-minus-circle" (click)="zoom = zoom - 1"></i>
            <div>
                <p>Larghezza</p>
                <input type="range" min="1" max="640" name="width" [(ngModel)]="width">
                <p>Lunghezza</p>
                <input type="range" min="1" max="640" name="width" [(ngModel)]="height">
            </div>
            
            <p>{{width}}/{{height}}</p>
            </div>`,
  //inputs: ['lat', 'lng']
})
export class MapComponent {
  @Input() lat: number;
  @Input() lng: number;
  public zoom: number;
  public width: number;
  public height: number;
  constructor(){
    this.zoom = 4;
    this.width = 200;
    this.height = 100;
  }
}
