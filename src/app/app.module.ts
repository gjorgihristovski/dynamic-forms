import { HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignUpService } from './service/sign-up.service';

export function minlengthValidationMessages(err, field) {
  return `Should have at least ${field.templateOptions.minLength} characters`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}

export function EmailValidator(control: FormControl): ValidationErrors {
return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(control.value) ? null : { 'email': true};
}

export function EmailValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid eMail Address`;
}

export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid IP Address`;
}

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(
      {
        validationMessages: [
          {name: 'email', message: EmailValidatorMessage},
          { name: 'ip', message: IpValidatorMessage },
          { name: 'required', message: 'This field is required' },
          { name: 'minlength', message: minlengthValidationMessages }
        ],
        validators: [
          { name: 'ip', validation: IpValidator},
          { name: 'email', validation: EmailValidator}
        ]
      }
    ),
    FormlyMaterialModule,
    MatButtonModule,
    FormlyBootstrapModule
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
