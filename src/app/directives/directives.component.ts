import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[] = [10,20,30,40,50];
  public states:string[] = ["Telangana","AndharPradesh","Tamilnadu","Kerala"];
  public products:any = [
    {name:'Pen', price:20, rating:4},
    {name:'Phone', price:20000, rating:4.5},
    {name:'Laptop', price:60000, rating:5},
    {name:'Remote', price:600, rating:2},
    {name:'Shirt', price:2000, rating:1.5},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
