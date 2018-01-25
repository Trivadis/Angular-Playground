import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { of } from 'rxjs/observable/of';

export class EmployeeValidators {
  static checkEmailsMatch(control: AbstractControl) {
    const email = control.get('email');
    const confirm = control.get('emailConfirm');
    if (!(email && confirm)) {
      return null;
    }
    return email.value === confirm.value ? null : { nomatch: true };
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value;
    if (!val || val.indexOf('@') > 0) {
      return null;
    }
    return { invalidemail: true };
  }

  static checkEmailUnique(control: AbstractControl) {
    return of(null);
  }
}
