import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeComponent } from '../containers/index';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class EmployeeEditGuard implements CanDeactivate<EmployeeComponent> {

  constructor(private translate: TranslateService) {

  }

  canDeactivate(component: EmployeeComponent): boolean {
    if (!component.isIntended) {
      const message = this.translate.instant("CORE.NAVIGATEWARNING") as string;
      return confirm(message);
    } else {
      return true;
    }
  }
}
