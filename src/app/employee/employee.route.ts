import { Routes } from '@angular/router';

import { EmployeeComponent }    from './employee.component';
import { EmployeeDetailsComponent }    from './employee-details.component';
import { EditComponent } from './edit.component';

// Route Configuration
export const EmployeeRoutes: Routes = [
  { path: 'employees', component: EmployeeComponent },
 /* { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'edit/:id', component: EditComponent }*/
];