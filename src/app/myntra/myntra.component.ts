import { Component, OnInit } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent implements OnInit {

  public products: any = [];
 
  
 

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

 

  mens(){
    this.products = this.products.filter((product:any)=>product.category.includes("men's clothing"));
  }
  
  jewl(){
    this.products = this.products.filter((product:any)=>product.category.includes("jewelery"));
  }
  elec(){
    this.products = this.products.filter((product:any)=>product.category.includes("electronics"));
  }
  women(){
    this.products = this.products.filter((product:any)=>product.category.includes("women's clothing"));
  }

  f7to50(){
    this.products = this.products.filter((product:any)=>product.price >=7 && product.price <=50);
  }
  f50to300(){
    this.products = this.products.filter((product:any)=>product.price >50 && product.price <=300);
  }
  f300to600(){
    this.products = this.products.filter((product:any)=>product.price >300 && product.price <=600);
  }
  f600to1000(){
    this.products = this.products.filter((product:any)=>product.price >600 && product.price <=1000);
  }

  sort(event:any){
    let value = event.target.value;
    if(value === "lToH"){
      this.products = this.products.sort((a:any , b:any)=>(a.price-b.price));
    }
    else if(value === "hToL"){
      this.products = this.products.sort((a:any , b:any)=>(b.price-a.price));
    }
    else{
      this._myntraService.getproducts().subscribe(
        (data:any)=>{
          this.products = data;
        }
      )
    }
  }
}
