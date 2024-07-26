import { Component, OnInit } from '@angular/core';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent implements OnInit {

  public students:any = [];
  public id:string = "";
  public term:string = "";


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

  delete(id:string){
    this._studentCardsService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert ("deleted Successfully!!!!")
        location.reload();
      },
      (err:any)=>{
        alert("Deletion Failed");
      }
    )
  }

  filter(term:string){
    this._studentCardsService.filterStudent(term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("internal issue");
      }
    )
  }
  

}
