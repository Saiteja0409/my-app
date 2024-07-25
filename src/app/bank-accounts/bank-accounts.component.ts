import { Component, OnInit } from '@angular/core';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  public accounts: any =[];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:number = 0;
  public page:number = 0;


  constructor(private _bankAccountsService:BankAccountsService) { 
    _bankAccountsService.getaccounts().subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    
    (err:any)=>{
      alert("Internal Server Issue");
    }
  )
  }

  ngOnInit(): void {
  }

  search(){
    this._bankAccountsService.getFilterAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Issue");
      }
    )
  }

  sort(){
    this._bankAccountsService.getSorted(this.column , this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Issue");
      }
    )
  }

  pageNo(){
    this._bankAccountsService.getpaged(this.limit , this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Issue");
      }
    )
  }
  delete(id:string){
    this._bankAccountsService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully!!");
        location.reload();
      },
      (err:any)=>{
        alert("Deletion Failed");
      }
    )
  }

  

}
