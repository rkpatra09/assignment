import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addEmpForm: FormGroup;
  submitted = false;
  employeeObj={};
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  empList=[];
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
	
  
		  
      this.addEmpForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        address: ['', Validators.required],
        dob: ['', Validators.required]
    });
  }
  get f() { return this.addEmpForm.controls; }
  
      onSubmit() {
          this.submitted = true;
			// stop here if form is invalid
          if (this.addEmpForm.invalid) {
			  
              return;
		}else{
			let val=this.addEmpForm.value;
			let uniqueEmpId=new Date().valueOf();
			  this.employeeObj={
				empId:uniqueEmpId,
				fullname:val.fullName,
				emailId:val.email,
				phone: val.phone,
				username: val.username,
				password: val.password,
				address: val.address,
				dob: val.dob
			  };
			  //NO API call so storing in local storage
			  this.empList=JSON.parse(localStorage.getItem('empList'));
			 this.empList.push(this.employeeObj);
			  localStorage.setItem('empList',JSON.stringify(this.empList));
			   var retVal = confirm("Employee record added successfully");
               if( retVal == true ) {
                  this.router.navigate(['employees']);
               } else {
					this.router.navigate(['employees']);
               }
			  
		}
		 
      }

}
