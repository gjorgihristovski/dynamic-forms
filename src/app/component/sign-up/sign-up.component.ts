import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SignUpService } from '../../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  fieldsArray: any[];

  constructor(private signUpService: SignUpService) {
    this.signUpService.getFields().subscribe((fields: any[]) => {
      this.fields = fields;
    fields.forEach((data) =>
      console.log(JSON.parse(data))
    );
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }

}
