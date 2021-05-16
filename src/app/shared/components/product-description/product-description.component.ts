import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  id: string;
  imageUrl: string;
  product: Product;

  isProductAdded: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.id = params.id;
        console.log(this.id); // price
      }
      );
    this.product = this.productService.getProductById(this.id);

    this.imageUrl = `assets/showcase/images/${this.product.imageUrl}.png`
    console.log("imageurl" + this.imageUrl);
  }

  public addToCart() {
    var user: string = window.sessionStorage.getItem("user");
    if (undefined === user) {
      window.sessionStorage.setItem('redirect', `product\\?${this.product.productId}`);
      this.router.navigate(['login']);
    }
    this.cartService.addToCart(this.product);
    this.isProductAdded = true;
  }
}
