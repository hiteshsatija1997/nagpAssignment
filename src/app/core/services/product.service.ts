import { Injectable } from '@angular/core';
import { Product } from './../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search: string;
  productList: Product[];
  productMap: Map<string, Product>;
  constructor() {
    this.productList = [{
      'imageUrl': 'tshirt1',
      'productId': 'tshirt1',
      'name': 'T Shirt Red Stripes',
      'description': 'String',
      'category': 'tshrit',
      'price': 200
    },
    {
      'imageUrl': 'tshirt2',
      'productId': 'tshirt2',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt3',
      'productId': 'tshirt3',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt4',
      'productId': 'tshirt4',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt5',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt6',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt7',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt8',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt9',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt10',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': '',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': '',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': '',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': '',
      'productId': 'String',
      'name': 'String',
      'description': 'String',
      'category': 'String',
      'price': 200
    }]

    // for (var product of this.productList) {
    //   this.productMap.set(product.productId, product);
    // }
    this.productMap = new Map();

    for (var i = 0; i < this.productList.length; i++) {
      this.productMap.set(this.productList[i].productId, this.productList[i]);
    }

  }

  getList(): Product[] {
    if (null === this.search || undefined === this.search) {
      console.log(this.productList.length)
      return this.productList;
    }
    else {
      return this.getSearchList(this.search);
    }
  }

  getSearchList(search: string) {
    var searchList: Product[];
    for (let product of this.productList) {
      if (product.name.includes(search)) {
        searchList.push(product);
      }
    }
    return searchList;
  }
  getProductById(idProduct: string): Product {
    return this.productMap.get(idProduct);
  }

  
}
