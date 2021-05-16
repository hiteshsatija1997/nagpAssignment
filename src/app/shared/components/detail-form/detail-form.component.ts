import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {

  isSubmitted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  submit() {
    // this.isSubmitted = true;
  }
  ok() {
    this.router.navigate(['']);
  }
  get f(){
    return this.form.controls;
  }
}
