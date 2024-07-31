import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm: FormGroup = new FormGroup({
    companyName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    founded: new FormControl(),
    ceo: new FormControl(),
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(),
      zipcode: new FormControl(),
      country: new FormControl()
    }),
    type: new FormControl(),
    departments: new FormArray([]),
    companyType: new FormControl(),

  })


  constructor() { 
    this.companyForm.get('companyType')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'service') {
          // add cilent name
          this.companyForm.addControl('clientName', new FormControl(null, [Validators.required , Validators.minLength(5), Validators.maxLength(10)]));
          this.companyForm.removeControl('productName');
        }
        else if (data == 'product') {
          // add product name
          this.companyForm.addControl('productName', new FormControl());
          this.companyForm.removeControl('clientName');
        }
      })
  }

  ngOnInit(): void {
  }

  get departmentsFormArray() {
    return this.companyForm.get('departments') as FormArray;
  }

  addDepartments() {
    this.departmentsFormArray.push(
      new FormGroup({
        departmentName: new FormControl(),
        head: new FormControl(),
        employees: new FormControl(),
        budget: new FormControl(null, [Validators.required , Validators.min(100000), Validators.max(99999999)])
      })

    )
  }

  deleteDpt(i:number){
    this.departmentsFormArray.removeAt(i);
  }

  create(){
    this.companyForm.markAllAsTouched();
   console.log(this.companyForm)
  }

}
