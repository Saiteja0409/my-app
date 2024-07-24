import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private _httpClient:HttpClient) { }

  getMemes(){
    return this._httpClient.get("https://api.imgflip.com/get_memes");
  }

}
