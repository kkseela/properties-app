import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
//import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user!: User;
  userSubmited: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService){}

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
        this.userSubmited = true;
        if(this.registerationForm.valid)
        {
        //this.user = Object.assign(this.user, this.registerationForm.value);
        //localStorage.setItem('Users', JSON.stringify(this.user));
        //this.addUser(this.user);
        this.userService.addUser(this.userData());
        this.registerationForm.reset();
        this.userSubmited=false;
        //alertify.success('Congrats, Successfully registerd!');
        }
        // else{
        //   alertify.error('UnSuccess Registration.');
        // }
    }

    userData(): User {
      return this.user = {
          userName: this.userName.value,
          email: this.email.value,
          password: this.password.value,
          mobile: this.mobile.value
      }
    }

    // addUser(user: any = {}){
    //   let users = [];
    //   if(localStorage?.getItem('Users'))
    //   {
    //     const storedUsers = localStorage.getItem('Users');
    //     const parsedUsers = storedUsers ? JSON.parse(storedUsers) : null;
    //     users = parsedUsers;
    //     users = [user, ...users];
    //   }
    //   else{
    //     users = [user];
    //   }
    //   localStorage.setItem('Users', JSON.stringify(this.user));
    // }

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
