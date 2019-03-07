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
 editForm: FormGroup;
    submitted = false;
  employeeObj={};
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  employeeDetails:any;
  constructor(private route:ActivatedRoute,private es:EmployeeService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
	  this.editForm = this.formBuilder.group({
            fullName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]],
			username: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
			address: ['', Validators.required],
			dob: ['', Validators.required],
			empId: ['', Validators.required]
        });
		
	  	this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
		console.log(id)
		
       return this.es.getEmpDetails(id).then(employee => {
			  this.employeeDetails = employee[0];
			  console.log(this.employeeDetails)
		});

		

    });
  }
  get f() { return this.editForm.controls; }
 
	 onSubmit() {
		  this.submitted = true;
		  console.log(this.editForm.value)
			// stop here if form is invalid
		  if (this.editForm.invalid) {
			  
			  return;
		}else{
			let val=this.editForm.value;
			this.employeeObj={
				empId:val.empId,
				fullname:val.fullName,
				emailId:val.email,
				phone: val.phone,
				username: val.username,
				password: val.password,
				address: val.address,
				dob: val.dob
			  };
			 return this.es.updateEmpDetails(this.employeeObj).then(employee => {
			  this.employeeDetails = employee;
			  console.log(this.employeeDetails)
			  var retVal = confirm("Employee record updated successfully");
               if( retVal == true ) {
                  this.router.navigate(['employees']);
               } else {
					this.router.navigate(['employees']);
               }
		});
		}
	 }
}
