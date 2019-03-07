import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
   providers: [EmployeeService]
})
export class EditComponent implements OnInit {
	sub:any;
	editEmployeeForm: FormGroup;
  submitted = false;
  employeeObj={};
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  empList=[];
  constructor(private route:ActivatedRoute,private es:EmployeeService,private formBuilder: FormBuilder) { }

  ngOnInit() {
	  	this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
		console.log(id)
		
       return this.es.getEmpDetails(id).then(employee => {
			  this.employeeList = employee;
			  console.log(employee)
		});
		
		 this.editEmployeeForm = this.formBuilder.group({
			fullName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]],
			username: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
			address: ['', Validators.required],
			dob: ['', Validators.required]
		});
    });
  }
  get f() { return this.editEmployeeForm.controls; }

}
