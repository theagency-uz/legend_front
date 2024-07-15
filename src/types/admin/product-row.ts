import { Language } from "../language";

export interface IProductRow {
  id: number | string;
  previewImage: string;
  name: Language;
  price: number;
  isHidden: boolean;
  createdAt: string;
}
