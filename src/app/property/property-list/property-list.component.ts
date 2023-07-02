import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 2,
      "Name": "Birla House 2",
      "Type": "House 2",
      "Price": 220000
    },
    {
      "Id": 3,
      "Name": "Birla House 3",
      "Type": "House 3",
      "Price": 130000
    },
    {
      "Id": 4,
      "Name": "Birla House 4",
      "Type": "House 4",
      "Price": 140000
    },
    {
      "Id": 5,
      "Name": "Birla House 5",
      "Type": "House 5",
      "Price": 150000
    },
    {
      "Id": 6,
      "Name": "Birla House 6",
      "Type": "House 6",
      "Price": 160000
    }
]

}
