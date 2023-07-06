import { Component, Input } from '@angular/core';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  @Input()
  property!: IProperty;

  // Property: any = {
  //   "Id": 1,
  //   "Name": "Birla House",
  //   "Type": "House",
  //   "Price": 120000
  // }
}
