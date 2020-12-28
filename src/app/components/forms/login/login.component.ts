import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  visibilityIcon = 'visibility';

  optionsLogin!: FormGroup;
  loginEmail = new FormControl('', [Validators.required, Validators.email]);
  loginPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  constructor(
    fbLogin: FormBuilder,
    private snackbar: MatSnackBar,
    private AuthUser: AuthUserService
  ) {
    this.optionsLogin = fbLogin.group({
      email: this.loginEmail,
      password: this.loginPassword,
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.optionsLogin.valid) {
      console.log(this.loginEmail.value, this.loginPassword.value);
      this.AuthUser.LoginUser({
        Email: this.loginEmail.value,
        Password: this.loginPassword.value,
      }).subscribe(() => {});
      this.snackbar.open('Login success', undefined, { duration: 2000 });
      this.optionsLogin.reset();
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
}
