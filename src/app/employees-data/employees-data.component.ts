import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent implements OnInit {

  public employees:any=[
    {name: 'Sai', age: 28, dob: new Date('04/09/1996'), experience: 3, package: 10},
    {name: 'Teja', age: 27, dob: new Date('08/02/1997'), experience: 3, package: 9},
    {name: 'Rohit', age: 27, dob: new Date('02/10/1997'), experience: 2, package: 8},
    {name: 'RahulReddy', age: 28, dob: new Date('07/25/1996'), experience: 4.5, package: 20},
    {name: 'Shamshu', age: 27, dob: new Date('06/12/1997'), experience: 4, package: 7},
    {name: 'Rafi', age: 28, dob: new Date('11/25/1996'), experience: 6, package: 30}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
