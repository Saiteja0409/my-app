import { Component, OnInit } from '@angular/core';
import { StudentCardsService } from '../student-cards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student-details',
  templateUrl: './create-student-details.component.html',
  styleUrls: ['./create-student-details.component.css']
})
export class CreateStudentDetailsComponent implements OnInit {
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    dob: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    profile_picture: new FormControl(),
    city: new FormControl(),


  })

  public id: string = "";
  
  constructor(private _StudentCardsService: StudentCardsService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        _StudentCardsService.getstudent(data.id).subscribe(
          (data: any) => {
            this.studentForm.patchValue(data);
          }
        )



      }
    )
  }

  ngOnInit(): void {
  }

  create() {

    if (this.id) {
      this._StudentCardsService.editStudent(this.id,this.studentForm.value).subscribe(
        (data: any) => {
          alert("edited successfully!!!!");
          this.studentForm.reset();
        },
        (err: any) => {
          alert("internal issue");
        }
      )
    }
    else {
      this._StudentCardsService.createStudentDetails(this.studentForm.value).subscribe(
        (data: any) => {
          alert("created successfully!!");
          this.studentForm.reset();
        },
        (err: any) => {
          alert("internal issue");
        }
      )
    }
  }

}
