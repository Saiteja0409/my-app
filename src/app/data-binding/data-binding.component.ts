import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  // var age = 20;
  public age:number = 20;
  public name:string = "abc";

  public isValid:boolean = true;

  public phone:string = " +91 "

  constructor() { }

  ngOnInit(): void {
  }

  sumbit(){
    alert("submit clicked");
  }
  search(){
    alert("key pressed in input");
  }

}
