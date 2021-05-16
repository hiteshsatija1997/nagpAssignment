import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: Product[], filter: string): Product[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.name.indexOf(filter) !== -1);


  }

}
