import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyntraService {


  constructor(private _httpCilent:HttpClient) { }
   getproducts():Observable<any>{
    return this._httpCilent.get("https://fakestoreapi.com/products");
   }

  
}
