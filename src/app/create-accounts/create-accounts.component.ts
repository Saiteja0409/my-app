import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent implements OnInit {
  public accountsForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
    
  })

  constructor(private _bankAccountsService:BankAccountsService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.accountsForm.value);
    this._bankAccountsService.createAccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("creation failed");
      }
    )

  }

}
