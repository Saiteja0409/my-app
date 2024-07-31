import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingCommunicationService {

 


  constructor() { }

    // create
    public counter$:BehaviorSubject<number> = new BehaviorSubject(0);
   
  
    // set
    setCount(value:number){
    this.counter$.next(value);  
    }
  
    // get
    getCount(){
     return this.counter$;
    }
}




