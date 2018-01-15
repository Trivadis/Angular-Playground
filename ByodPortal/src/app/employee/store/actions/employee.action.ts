import { Action } from '@ngrx/store';
import { Employee } from '../../models/employee.model';


export enum ActionTypes {
    LoadEmployees = '[Employees] Load Employee',
    LoadEmployeeSuccess = '[Employees] Load Employee Sucess',
    LoadEmployeeFail = '[Employees] Load Employee Fail'
}

export class LoadEmployees implements Action {
  readonly type = ActionTypes.LoadEmployees;
}

export class LoadEmployeeSuccess implements Action {
  readonly type = ActionTypes.LoadEmployeeSuccess;
  constructor(public payload: Employee[]) {}
}

export class LoadEmployeeFail implements Action {
  readonly type = ActionTypes.LoadEmployeeFail;
  constructor(public payload: any) {}
}

// action types
export type EmployeeActions =
  | LoadEmployees
  | LoadEmployeeSuccess
  | LoadEmployeeFail
  ;
