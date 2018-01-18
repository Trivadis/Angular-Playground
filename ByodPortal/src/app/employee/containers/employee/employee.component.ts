import { Employee } from './../../models/employee.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'employee.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
    employee$: Observable<Employee>;

    constructor(private store$: Store<fromStore.State>) { }

    ngOnInit() {
        this.employee$ = this.store$.select(fromStore.getSelectedEmployee);
     }

     onCreate(event: Employee) {
        this.store$.dispatch(new fromStore.CreateEmployee(event));
      }

      onUpdate(event: Employee) {
        this.store$.dispatch(new fromStore.UpdateEmployee(event));
      }

      onRemove(event: Employee) {
        const remove = window.confirm('Are you sure?');
        if (remove) {
          this.store$.dispatch(new fromStore.RemoveEmployee(event));
        }
      }
}
