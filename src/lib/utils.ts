import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCost(locale: string, cost: number) {
  return new Intl.NumberFormat(locale, {}).format(cost);
}
