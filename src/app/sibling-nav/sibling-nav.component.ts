import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-sibling-nav',
  templateUrl: './sibling-nav.component.html',
  styleUrls: ['./sibling-nav.component.css']
})
export class SiblingNavComponent implements OnInit {

  public count:number = 0;

  constructor(private _siblingCommunicationService:SiblingCommunicationService) {
   
    this._siblingCommunicationService.getCount().subscribe(
      (data:number)=>{
        this.count = data;
      }
    )
  
   }

  ngOnInit(): void {
  }

  

}
