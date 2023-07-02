import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties: any;

  /**
   *
   */
  constructor(private housingService: HousingServiceService) {
    
    
  }

  ngOnInit(): void {
    this.housingService.getProperties().subscribe(
          data=>{
            this.Properties = data;
            console.log(data);
          },
          error =>{
              console.log(error);
          }
          
          );
        // this.http.get('data/properties.json').subscribe(
        //   data=>console.log(data)
        //);
  }

}
