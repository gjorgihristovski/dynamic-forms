import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {}

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/forms/sign-up.json');
  }
}
