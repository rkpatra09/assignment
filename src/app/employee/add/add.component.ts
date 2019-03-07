import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addEmpForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.addEmpForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.addEmpForm.controls; }
  
      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.addEmpForm.invalid) {
              return;
          }
  
          alert('SUCCESS!! :-)')
      }

}
