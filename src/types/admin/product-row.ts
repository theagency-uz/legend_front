import { Language } from "../language";

export interface IProductRow {
  id: number | string;
  slug: string;
  previewImage: string;
  name: Language;
  price: number;
  isHidden: boolean;
  createdAt: string;
}
