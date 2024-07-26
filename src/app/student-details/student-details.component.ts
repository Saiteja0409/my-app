import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public student:any = {};

  constructor(private _activatedRoute:ActivatedRoute , private _studentCardsService:StudentCardsService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentCardsService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.student = data;
          },
          (err:any)=>{
            alert("internal issue")
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
