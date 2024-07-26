import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpCilent:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpCilent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

  getVehicle(id:string):Observable<any>{
    return this._httpCilent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpCilent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getSortedVehciles(coloumn:string , order:string):Observable<any>{
    return this._httpCilent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+coloumn+"&order="+order);
  }
  
  getPagedVehicles(limit:number , page:number):Observable<any>{
    return this._httpCilent.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }

  deleteVehicle(id:string):Observable<any>{
    return this._httpCilent.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpCilent.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }

  updateVehicle(data:any , id:string):Observable<any>{
    return this._httpCilent.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data)
  }

}