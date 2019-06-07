import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {}

  getFields() {
    return this.http.get('assets/forms/sign-up.json');
  }
}
