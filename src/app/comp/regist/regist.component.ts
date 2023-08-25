import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
})
export class RegistComponent {
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.pass;
  }
}
