import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
  }
  redirect() {
    this.router.navigate(['cart']);
  }
  search(search: string) {
    this.router.navigate(['search'], { queryParams: { name: search } })
  }
}
