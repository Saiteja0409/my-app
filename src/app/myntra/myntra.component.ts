import { Component, OnInit } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent implements OnInit {

  public products: any = [];
  public term:string = "";

  constructor(private _myntraService: MyntraService) {
    _myntraService.getproducts().subscribe(
      (data: any) => {
        this.products = data;
      },

      (err: any) => {
        alert("Internal Server Issue");
      }
    )
  }

  ngOnInit(): void {
  }
  filter(term:string){
    this._myntraService.getFiltered(this.term).subscribe(
      (data: any) => {
        this.products = data;
      },

      (err: any) => {
        alert("Internal Server Issue");
      }
    )
  }
  

}
