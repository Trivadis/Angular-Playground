import { Employee } from './../../models/employee.model';

import * as fromState from '../state/employee.state';
import * as fromActions from '../actions/employee.action';

export function reducer(
  state = fromState.initialState,
  action: fromActions.EmployeeActions
): fromState.EmployeeState {

  switch (action.type) {
    case fromActions.ActionTypes.LoadEmployees: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.ActionTypes.LoadEmployeeSuccess: {
      const employees = action.payload;

      const entities = employees.reduce(
        (entities: { [id: number]: Employee }, employee: Employee) => {
          return {
            ...entities,
            [employee.id]: employee,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromActions.ActionTypes.LoadEmployeeFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

  }

  return state;
}

export const getEmployeeEntities = (state: fromState.EmployeeState) => state.entities;
export const getEmployeeLoading = (state: fromState.EmployeeState) => state.loading;
export const getEmployeeLoaded = (state: fromState.EmployeeState) => state.loaded;
