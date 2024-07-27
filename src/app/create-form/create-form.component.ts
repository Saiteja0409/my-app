import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    bussFee: new FormControl(),
    hostelFee: new FormControl()

  })

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayScholor') {
          // add buss fee
          this.userForm.addControl('bussFee', new FormControl());
          this.userForm.removeControl('hosteFee');
        }
        else if (data == 'hostelFee') {
          // add hostel fee
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('bussFee');
        }
      })
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.userForm);
  }

}
