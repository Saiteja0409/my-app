import { Component, OnInit } from '@angular/core';
import { BankAccountsService } from '../bank-accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  public account:any = {};

  constructor(private _bankAccountsService:BankAccountsService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _bankAccountsService.getBankAccount(data.id).subscribe(
          (data:any)=>{
            this.account = data;
          },
          (err:any)=>{
            alert("internal isssue")
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

  
}
