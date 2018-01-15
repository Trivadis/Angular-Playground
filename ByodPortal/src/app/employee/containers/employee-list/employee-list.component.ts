import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from '../../services/index';
import { Employee } from '../../models/employee.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
    templateUrl: 'employee-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {
    employees$: Observable<Employee[]>;

    constructor(private store: Store<fromStore.State>) { }

    ngOnInit() {
        this.employees$ =  this.store.select(fromStore.getEmployees);
    }
}
