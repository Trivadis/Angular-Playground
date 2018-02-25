import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeComponent } from '../containers/index';

@Injectable()
export class EmployeeEditGuard implements CanDeactivate<EmployeeComponent> {
  canDeactivate(component: EmployeeComponent): boolean {
    if (!component.isIntended) {
      return confirm(`Navigate away and lose all changes?`);
    } else {
      return true;
    }
  }
}
