
import * as fromEmployee from './employee.state';
import { Employee } from '../../models/employee.model';

export interface State {
    employee: fromEmployee.EmployeeState;
  }
