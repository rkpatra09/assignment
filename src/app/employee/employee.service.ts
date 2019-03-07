import { Injectable } from '@angular/core';
//import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
//import {Observable} from 'rxjs/Observable';

const employeess = [
  {
    empId:1,
    fullname:'Alex',
    emailId:'alex@gmail.com',
    phone: 9154738678,
    username: 'alex',
    password: 'alexp',
    address: '#13 wall street',
    dob: '18/05/1993'
  },
  {
    empId:2,
    fullname:'Castiel',
    emailId:'cas@hotmail.com',
    phone: 9154738878,
    username: 'dor',
    password: 'rabc',
    address: '#20 st louis street',
    dob: '6/05/1967'
  },
  {
    empId:3,
    fullname:'Kevin',
    emailId:'kev_prop@yahoo.com',
    phone: 6758739978,
    username: 'kev',
    password: 'kevinx',
    address: '#89 quartz street',
    dob: '1/02/1987'
  },
  {
    empId:4,
    fullname:'Dean',
    emailId:'dinno@gmail.com',
    phone: 9154738678,
    username: 'din',
    password: 'din09',
    address: 'Oklahama',
    dob: '6/07/1989'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  
  /*getEmployees():Observable<Employee[]>{
	return this._http.get('API URL')
	.map((response:Response) => <Employee[]> response.json());
	}*/ //If we have API url then HTTP call
	
  get() {
    return new Promise(resolve => resolve(employeess));
  }
  delete(selected) {
	   const retriveData=localStorage.getItem('empList');
		let employees=JSON.parse(retriveData);
		return new Promise(resolve => {
		const index = employees.findIndex(employees => employees.empId === selected.empId);
		employees.splice(index, 1);
		 localStorage.setItem('empList',JSON.stringify(employees));
		resolve(true);
	  });
  }
  add(data) {
    employeess.push();
  }
  getEmpDetails(id) {
		const retriveData=localStorage.getItem('empList');
		let employees=JSON.parse(retriveData);
		let data= employees.filter(function(item){
			return item.empId==id;         
		});
		return new Promise(resolve => resolve(data));
	
  }
}
