import { Language } from "./language";

export interface IItemInCart {
  id: number | string;
  quantity: number;
  price: number;
  title: Language;
  imageUrl: string;
}
