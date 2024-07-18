
import { IProduct } from "./product";

export interface IItemInCart extends IProduct {
  quantity: number;
}
