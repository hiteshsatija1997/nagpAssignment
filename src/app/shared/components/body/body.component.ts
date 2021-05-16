import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  name: string;
  products: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.name = params.name;
        console.log(this.name); // price
      }
      );
    if (null === this.name || undefined === this.name) {
      this.products = this.productService.getList();
    }
    else {
      this.products = this.productService.getSearchList(this.name);
    }
  }

}
