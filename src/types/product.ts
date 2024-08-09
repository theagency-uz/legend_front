import { Language } from "./language";

export interface IProduct {
  id: number;
  images: string[];
  itemsPerBlock: number;
  name: Language;
  packageCode: number | string;
  code: number | string;
  previewImage: string;
  price: number;
  slug: string;
  productCategoryId?: number;
  productTypeId?: number;
  isHidden?: boolean;
}

export interface IProductVariation extends IProduct {
  product_variation: { value: number };
}
