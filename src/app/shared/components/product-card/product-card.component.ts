import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input()
  product: Product;
  imageUrl: string;

  constructor() { }
  ngOnInit(): void {

    this.imageUrl = `assets/showcase/images/${this.product.imageUrl}.png`
  }

}
