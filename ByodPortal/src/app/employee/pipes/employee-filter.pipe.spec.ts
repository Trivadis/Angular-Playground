import { EmployeeFilterPipe } from './employee-filter.pipe';

import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { reducers } from './../../store';
import { reducers as reducersFeature } from './../../store/reducers/';
import { Employee } from '../models/employee.model';

describe('EmployeeFilterPipe', () => {
  let pipe: EmployeeFilterPipe;
  let employeees: Employee[];

  beforeEach(() => {
    pipe = new EmployeeFilterPipe();
  });
  beforeEach(() => {
    employeees = [
      { firstname: 'Thomas', lastname: 'Gassmann' },
      { firstname: 'Lara', lastname: 'croft' }
    ];
  });

  it('should return all data', () => {
    const result = pipe.transform(employeees, null);
    expect(result.length).toBe(2);
  });
  it('should filter correctly', () => {
    const result = pipe.transform(employeees, 'Thomas');
    expect(result.length).toBe(1);
  });
  it('should filter correctly with capital letters', () => {
    const result = pipe.transform(employeees, 'LARA');
    expect(result.length).toBe(1);
  });
});
