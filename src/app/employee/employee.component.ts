import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
private employeeList=[];
  constructor(private es:EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }
	getAllEmployee(){
		if(localStorage.getItem('empList')==undefined && localStorage.getItem('empList')==null)
		{
			return this.es.get().then(employee => {
			  this.employeeList = employee;
			  console.log(employee)
			   localStorage.setItem('empList',JSON.stringify(employee));
			});
		}else{
			const retriveData=localStorage.getItem('empList');
			this.employeeList=JSON.parse(retriveData);
		}
		
	  }
	deleteEmpDetails(item){
		this.es.delete(item).then(() => {
			return this.getAllEmployee();
		});
	}
}
