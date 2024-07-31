import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-sibling-items',
  templateUrl: './sibling-items.component.html',
  styleUrls: ['./sibling-items.component.css']
})
export class SiblingItemsComponent implements OnInit {

  public count:number = 1;
  constructor(private _siblingCommunicationService:SiblingCommunicationService) { }

  ngOnInit(): void {
  }
  addCart(){
    this._siblingCommunicationService.setCount(this.count++);
  }

}
