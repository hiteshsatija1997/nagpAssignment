import { Component, OnInit } from '@angular/core';
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
  submit() {
    this.isSubmitted = true;
  }
  ok(){
    this.router.navigate(['']);
  }
}
