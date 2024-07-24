import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-db',
  templateUrl: './employees-db.component.html',
  styleUrls: ['./employees-db.component.css']
})
export class EmployeesDbComponent implements OnInit {


  public newEmployee: any = {
    name: '',
    id: null,
    role:'',
    dob: '',
    email:'',
    contactNumber: null,
    joiningdate: ''
  }

  public employeename:string = "";

  public employees: any[] = [
    { name: 'Sai', id: 2424, role: 'UI deleveloper', dob: new Date('4/9/1996'), email: 'eppapallyteja@gmail.com', contactNumber: 8555029920, joiningdate: new Date('1/6/2024') },
    { name: 'Teja', id: 2425, role: 'Java deleveloper', dob: new Date('9/6/1996'), email: 'teja@gmail.com', contactNumber: 9738490389, joiningdate: new Date('8/7/2020') },
    { name: 'Nikhil', id: 2426, role: 'UI deleveloper', dob: new Date('7/14/1996'), email: 'nik@gmail.com', contactNumber: 9637863878, joiningdate: new Date('5/16/2024') },
    { name: 'Arif', id: 2427, role: 'UI deleveloper', dob: new Date('9/4/1996'), email: 'arifshaik@gmail.com', contactNumber: 9638273836, joiningdate: new Date('1/26/2024') },
    { name: 'Durgesh', id: 2428, role: 'UI deleveloper', dob: new Date('9/10/1998'), email: 'durgesh@gmail.com', contactNumber: 9387643874, joiningdate: new Date('5/5/2024') },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  search(employeename:string){
    this.employees = this.employees.filter(employee=>employee.name.toLowerCase().includes(employeename.toLowerCase()));
  }

  register() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', id: null, role:'', dob:'', email: '', contactNumber: null, joiningdate: '' };
    
  }

  delete(i:number){
    this.employees.splice(i,1);
  }
  

}
