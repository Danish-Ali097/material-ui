import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  optionsSignup!: FormGroup;
  signName = new FormControl('', Validators.required);
  signEmail = new FormControl('', [Validators.required, Validators.email]);
  signPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  visibilityIcon = 'visibility';
  constructor(fbSignup: FormBuilder, private snackbar: MatSnackBar) {
    this.optionsSignup = fbSignup.group({
      name: this.signName,
      email: this.signEmail,
      password: this.signPassword,
    });
  }
  onSubmit() {
    if (this.optionsSignup.valid) {
      console.log(
        this.signName.value,
        this.signEmail.value,
        this.signPassword.value
      );
      this.snackbar.open('Signup success', undefined, { duration: 2000 });
      this.optionsSignup.reset();
    }
  }
  changeVisibility(password: any) {
    if (password.type == 'password') {
      password.type = 'text';
      this.visibilityIcon = 'visibility_off';
    } else {
      password.type = 'password';
      this.visibilityIcon = 'visibility';
    }
  }
  ngOnInit(): void {}
}
