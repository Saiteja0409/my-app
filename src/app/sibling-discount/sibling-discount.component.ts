import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-sibling-discount',
  templateUrl: './sibling-discount.component.html',
  styleUrls: ['./sibling-discount.component.css']
})
export class SiblingDiscountComponent implements OnInit {
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
