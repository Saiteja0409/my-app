import { Component, OnInit } from '@angular/core';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent implements OnInit {

  public students:any = [];

  constructor(private _studentCardsService:StudentCardsService) { 
    _studentCardsService.getStudentDetails().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal server issue");
      }
    )
  }

  ngOnInit(): void {
  }

}
