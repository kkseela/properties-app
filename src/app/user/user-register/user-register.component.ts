import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
  //   this.registerationForm = new FormGroup({
  //     userName: new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.email, Validators.required]),
  //     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //     confirmPassword: new FormControl(null, [Validators.required]),
  //     mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  // }, { validators: passwordConfirmMatching() });
  this.createRegistrationForm();
}

  createRegistrationForm()
  {
    this.registerationForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  }, { validators: passwordConfirmMatching() });
  }

  

    onSubmit() {
        console.log(this.registerationForm);
    }

    get userName(){
      return this.registerationForm
            .get('userName') as FormControl;
    }

        get email(){
      return this.registerationForm
            .get('email') as FormControl;
    }

        get password(){
      return this.registerationForm
            .get('password') as FormControl;
    }

        get confirmPassword(){
      return this.registerationForm
            .get('confirmPassword') as FormControl;
    }

        get mobile(){
      return this.registerationForm
            .get('mobile') as FormControl;
    }
}


export function passwordConfirmMatching(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null; // Passwords match
    }

    return { notmatched: true }; // Passwords don't match
  };
}
