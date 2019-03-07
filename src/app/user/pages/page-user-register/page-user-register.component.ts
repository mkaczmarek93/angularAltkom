import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-user-register',
  templateUrl: './page-user-register.component.html',
  styleUrls: ['./page-user-register.component.css']
})
export class PageUserRegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    person: new FormGroup({
      name: new FormControl(''),
      surname: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.registerForm.getRawValue())
  }

}
