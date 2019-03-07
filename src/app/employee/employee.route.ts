import { Routes } from '@angular/router';

import { EmployeeComponent }    from './employee.component';
import { AddComponent }    from './add/add.component';
import { EditComponent } from './edit/edit.component';

// Route Configuration
export const EmployeeRoutes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'employees/add', component: AddComponent },
  { path: 'employees/edit/:id', component: EditComponent }
];