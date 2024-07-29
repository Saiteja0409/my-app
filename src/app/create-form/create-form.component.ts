import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3) , Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(18) , Validators.max(100)]),
    phone: new FormControl(null, [Validators.required , Validators.min(1000000000) , Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required , Validators.email]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required ,   Validators.min(100000) , Validators.max(999999)])
    }),
    type: new FormControl(),
    // bussFee: new FormControl(),
    // hostelFee: new FormControl()
    cards:new FormArray([])
  })

  get CardsArrayForm(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.CardsArrayForm.push(
      new FormGroup({
        number: new FormControl(null , [Validators.required]),
        expiry: new FormControl(null , [Validators.required]),
        cvv: new FormControl(null, [Validators.required , Validators.min(3) , Validators.max(3)])
      })
    )
  }

  

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayScholor') {
          // add buss fee
          this.userForm.addControl('bussFee', new FormControl(null, [Validators.required , Validators.min(10000), Validators.max(50000)]));
          this.userForm.removeControl('hostelFee');
        }
        else if (data == 'residential') {
          // add hostel fee
          this.userForm.addControl('hostelFee', new FormControl(null, [Validators.required , Validators.min(50000), Validators.max(100000)]));
          this.userForm.removeControl('bussFee');
        }
      })
  }

  ngOnInit(): void {
  }
  submit() {
      this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }
  deleteCard(i:number){
    this.CardsArrayForm.removeAt(i);
  }

}
