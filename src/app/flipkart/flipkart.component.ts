import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filpkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public item: string = "";

  public products: any[] = [
    { name: 'pen', price: 20, rating: 3, freeDelivery: false },
    { name: 'iphone', price: 80000, rating: 5, freeDelivery: true },
    { name: 'shirt', price: 3000, rating: 4.5, freeDelivery: true },
    { name: 'cap', price: 4000, rating: 4.8, freeDelivery: true },
    { name: 'mobilecase', price: 199, rating: 3.2, freeDelivery: false },
    { name: 'remote', price: 600, rating: 3, freeDelivery: false },
    { name: 'watch', price: 7000, rating: 4, freeDelivery: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }



  search(item: string) {
    this.products = this.products.filter(product => product.name.includes(item));
  }

  free() {
    this.products = this.products.filter(product => product.freeDelivery);
  }

  plh() {
    this.products.sort((a, b) => a.price - b.price);
  }

  phl() {
    this.products.sort((a, b) => b.price - a.price);
  }

  rlh() {
    this.products.sort((a, b) => a.rating - b.rating);
  }

  rhl() {
    this.products.sort((a, b) => b.rating - a.rating);
  }

  off() {
    this.products = this.products.map(product => {
      product.price = product.price / 2;
      return product;
    });
  }

  delivery() {
    this.products = this.products.map(product => {
      if (product.freeDelivery == false) {
        product.price = product.price + 100;
      }
      return product;
    });
  }

  totalPrice() {
    let total = this.products.reduce((sum, a) => sum + a.price, 0);
    alert(total);
  }

  totalCart() {
    let cart = this.products.length;
    alert(cart);
  }

  public newProduct: any = {
    name: '',
    price: 0,
    rating: 0,
    freeDelivery: false
  };

  addToCart() {
     
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, rating: 0, freeDelivery: false };
    
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }

}
