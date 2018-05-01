import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from '../models/country';

@Component({
  selector: 'tabbar',
  template: `<div class="btn btn-group">
                <button 
                        *ngFor="let item of items" 
                        class="btn"
                        [ngClass]="{'btn-success': active?.id === item.id}"
                        (click)="selectCountry(item)">
                    {{item.name}}
                </button>
            </div>`,
  //inputs: ['lat', 'lng']
})
export class TabbarComponent {
    @Input() items;
    @Input() active: Country;
    @Output() em: EventEmitter<any>;
    constructor(){
      this.em = new EventEmitter();
    }
    selectCountry(country){
      this.em.emit(country);
    }
}
