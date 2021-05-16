import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name: string = "";
  products: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
    }
    );
    this.products = this.productService.getSearchList(this.name);
  }

  ngOnInit(): void {

  }
}
