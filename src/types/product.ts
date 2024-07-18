import { Language } from "./language";

export interface IProduct {
  id: number;
  images: string[];
  itemsPerBlock: number;
  name: Language;
  packageCode: number | string;
  previewImage: string;
  price: number;
  slug: string;
  productCategoryId?: number;
  productTypeId?: number;
}

export interface IProductVariation extends IProduct {
  product_variation: { value: number };
}
