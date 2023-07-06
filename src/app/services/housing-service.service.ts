import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

  constructor(private http:HttpClient) { }

  getProperties(SellRent: number): Observable<IProperty[]>
  {
    // return this.http.get<IProperty[]>('data/properties.json').pipe
    // (map(data => data.map(
    //   json => ({
    //     Id: json.Id,
    //     Name: json.Name,
    //     Type: json.Type,
    //     Price: json.Price
    //   }) 
    // )
    // ));

    return this.http.get<IProperty[]>('data/properties.json').pipe
    (map(data => 
      {
        const properties: Array<IProperty> = [];
        for(const id in data)
        {
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent)
          {
            properties.push(data[id]);
          }
        } 
        return properties;
      }
    ));

  }
}
