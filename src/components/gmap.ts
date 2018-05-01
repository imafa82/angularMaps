import {Component, Input} from '@angular/core';

@Component({
  selector: 'gmap',
  template: `<div>
                <img src="http://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lng}}&zoom=4&size=200x100" alt="mappa">
            </div>`,
  //inputs: ['lat', 'lng']
})
export class MapComponent {
  @Input() lat: number;
  @Input() lng: number;
}
