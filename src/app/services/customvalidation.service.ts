import {
  Injectable
} from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  FormGroup
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  patternvalidator(): ValidatorFn {
    return (control: AbstractControl): {
      [key: string]: any
    } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : {
        invalidPassword: true
      };
    };
  }
  MatchPassword(password: string, confirm_password: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirm_password];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({
          passwordMismatch: true
        });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}