import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-grade',
  templateUrl: './wish-grade.component.html',
  styleUrls: ['./wish-grade.component.css']
})
export class WishGradeComponent implements OnInit {

  public time:number = 0;
  public marks:number = 0;
  public result:string = "";
  public marks1:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  wish(){
    if (this.time>=5 && this.time<=12 ){
     this.result =  "Good Morning";
  }
  else if(this.time>12 && this.time<=17){
      this.result = "Good Afternoon";
  }
  else if(this.time>17 && this.time<=20){
      this.result =  "Good Evening";
  }
  else{
      this.result = "Good Night";
  }
  }
  
  // marks(){
  //   if (marks>80){
  //     document.getElementById('marks1').innerText="Result:Grade A";
  // }
  // else if(marks>60){
  //     document.getElementById('marks1').innerText="Result:Grade B";
  // }
  // else if(marks>35){
  //     document.getElementById('marks1').innerText="Result:Grade C";
  // }
  // else{
  //     document.getElementById('marks1').innerText="Result:Fail";
  // }
  // }

}
