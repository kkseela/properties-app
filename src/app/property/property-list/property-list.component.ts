import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { IProperty } from '../iproperty';
import { Observable, observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  SellRent = 1;
  Properties!: Array<IProperty>;

  /**
   *
   */
  constructor(private activatedRoute: ActivatedRoute ,private housingService: HousingServiceService) {
    
    
  }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.url.toString())
    {
      this.SellRent=2; // this is to indecate it is for rent-property
    }
    this.housingService.getProperties(this.SellRent).subscribe(
          data=>{
            this.Properties = data;
            console.log(data);
          },
          error =>{
            console.log('httperror');
              console.log(error);
          }
          
          );
        // this.http.get('data/properties.json').subscribe(
        //   data=>console.log(data)
        //);
  }

}
