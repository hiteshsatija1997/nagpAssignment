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
      'name': 'Marron Tshirt with black stripes',
      'description': 'String',
      'category': 'tshrit',
      'price': 2500
    },
    {
      'imageUrl': 'tshirt2',
      'productId': 'tshirt2',
      'name': 'Tri colored designer tshirt',
      'description': 'String',
      'category': 'String',
      'price': 2000
    }, {
      'imageUrl': 'tshirt3',
      'productId': 'tshirt3',
      'name': 'Designer Blue tshirt',
      'description': 'String',
      'category': 'String',
      'price': 1900
    }, {
      'imageUrl': 'tshirt4',
      'productId': 'tshirt4',
      'name': 'Blue shirt',
      'description': 'String',
      'category': 'String',
      'price': 2500
    }, {
      'imageUrl': 'tshirt5',
      'productId': 'tshirt5',
      'name': 'yellow black striped tshirt',
      'description': 'String',
      'category': 'String',
      'price': 1000
    }, {
      'imageUrl': 'tshirt6',
      'productId': 'tshirt6',
      'name': 'women black top',
      'description': 'String',
      'category': 'String',
      'price': 2000
    }, {
      'imageUrl': 'tshirt7',
      'productId': 'tshirt7',
      'name': 'women red designer top',
      'description': 'String',
      'category': 'String',
      'price': 2200
    }, {
      'imageUrl': 'tshirt8',
      'productId': 'tshirt8',
      'name': 'women cotton tshirt',
      'description': 'String',
      'category': 'String',
      'price': 2000
    }, {
      'imageUrl': 'tshirt9',
      'productId': 'tshirt9',
      'name': 'blue women top',
      'description': 'String',
      'category': 'String',
      'price': 2020
    }, {
      'imageUrl': 'tshirt10',
      'productId': 'tshirt10',
      'name': 'red women top',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt11',
      'productId': 'tshirt11',
      'name': 'blue women top',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt12',
      'productId': 'tshirt12',
      'name': 'cian dress women',
      'description': 'String',
      'category': 'String',
      'price': 200
    }, {
      'imageUrl': 'tshirt13',
      'productId': 'tshirt13',
      'name': 'printed women top',
      'description': 'String',
      'category': 'String',
      'price': 2200
    }, {
      'imageUrl': 'tshirt14',
      'productId': 'tshirt14',
      'name': 'pink women top',
      'description': 'String',
      'category': 'String',
      'price': 900
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
