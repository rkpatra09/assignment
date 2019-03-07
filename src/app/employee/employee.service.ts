import { Injectable } from '@angular/core';
//import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
//import {Observable} from 'rxjs/Observable';

const employeess = [
  { empId: '101', name: "John" },
  { empId: '102', name: "Joseph" },
  { empId: '103', name: "Raj" },
  { empId: '104', name: "Maria" },
  { empId: '105', name: "Max" },
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
	  return new Promise(resolve => {
		const index = employeess.findIndex(employeess => employeess === selected);
		console.log(index)
		employeess.splice(index, 1);
		resolve(true);
	  });
	}
}
