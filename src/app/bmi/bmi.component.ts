import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public height: number = 0;
  public weight: number = 0;
  public result: number = 0;
  public result1: string = "";
  public gLN: string = "";
  public weightDiff: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calc() {
    this.result = (this.weight * 10000) / (this.height * this.height)
    
    if (this.result <= 18.5) {
      this.result1 = "(Under Weight)";
    }
    else if (this.result <= 24.9) {
      this.result1 = "(Normal)";
    }
    else if (this.result <= 29.9) {
      this.result1 = "(Over Weight)";
    }
    else if (this.result <= 34.9) {
      this.result1 = "(Obese)";
    }
    else {
      this.result1 = "(Extremly Obese)";
    }

    if(this.result >= 25){
      this.gLN = "to loose";
      this.weightDiff = (this.weight - 24.9 * (this.height/100)*(this.height/100));
    }
    else if(this.result <18.5){
      this.gLN = "to gain";
      this.weightDiff = (18.5 * (this.height/100)*(this.height/100)-this.weight);
    }
    else {
      this.gLN = "";
      this.weightDiff = 0;
    }

  }


}
