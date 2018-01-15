import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../../app/store';
import * as employeeActions from '../actions/employee.action';
import * as fromServices from '../../services';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: fromServices.EmployeeService
  ) {}

  @Effect()
  loadEmployees$ = this.actions$.ofType(employeeActions.ActionTypes.LoadEmployees).pipe(
    switchMap(() => {
      return this.employeeService
        .getEmployees()
        .pipe(
          map(employees => new employeeActions.LoadEmployeeSuccess(employees)),
          catchError(error => of(new employeeActions.LoadEmployeeFail(error)))
        );
    })
  );
}
