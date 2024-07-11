import { Language } from "./language";

export interface IFilter {
  id: number;
  name: Language;
  slug: string;
  value: number;
}
