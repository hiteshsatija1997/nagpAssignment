import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts: Map<string, Cart>;
  constructor() {
    this.carts = new Map();
  }

  public addToCart(product: Product): boolean {
    var user: string = window.sessionStorage.getItem("user");
    if (undefined === user) {
      return false;
    }
    var cart: Cart = this.carts.get(user);
    if (undefined !== cart) {

      cart.products.push(product);
      cart.value += product.price;
    } else {
      cart = {
        'userId': user, 'products': [product], value: product.price
      };
    }
    this.carts.set(user, cart);
  }

  public getCart(user: string): Cart {
    var cart: Cart = this.carts.get(user);
    if (undefined === cart || null === cart) {
      cart = {
        'userId': user, 'products': [], value: 0
      }
      this.carts.set(user, cart);
    }
    return this.carts.get(user);
  }

  public checkOut(user: string): boolean {
    this.carts.delete(user);
    return true;
  }
}
