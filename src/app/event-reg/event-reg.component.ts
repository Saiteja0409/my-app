import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent implements OnInit {

  public name:string = "";
  public names:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  reg(){
    if(this.name != ""){
      this.names.push(this.name.trim());
      this.name = "";
    }
  }


}
