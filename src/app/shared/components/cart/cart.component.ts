import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart;
  products: Product[];
  constructor(private router: Router, private cartService: CartService) {
    var user: string = window.sessionStorage.getItem("user");
    if (null === user) {
      window.sessionStorage.setItem(`redirect`, `#`);
      router.navigate(['login']);
    } else {
      this.cart = cartService.getCart(user);
      this.products = this.cart.products;
    }
  }

  ngOnInit(): void {
  }
  checkout(){
    this.router.navigate(['checkout'])
  }
}
