import { Product } from './product';
import { User } from './user';

export interface Cart {
    userId: string,
    products: Product[],
    value: number
}
