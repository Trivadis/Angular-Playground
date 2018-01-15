import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './containers/employee-list/employee-list.component';

import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    canActivate: [fromGuards.EmployeeGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
