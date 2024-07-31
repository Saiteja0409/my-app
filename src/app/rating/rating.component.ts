import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() public rating:any = 0;

  @Output() public star:EventEmitter<any> = new EventEmitter;
  
 


  constructor() { }

  ngOnInit(): void {
  }
 




}
