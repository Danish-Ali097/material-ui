import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewItemComponent } from './components/forms/add-new-item/add-new-item.component';
import { ListComponent } from './components/list/list.component';
import { SignupComponent } from './components/forms/signup/signup.component';
import { LoginComponent } from './components/forms/login/login.component';
import { AuthUserService } from './services/auth-user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NotFoundComponent,
    HomeComponent,
    AddNewItemComponent,
    ListComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    HttpClientModule,
  ],
  providers: [AuthUserService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
