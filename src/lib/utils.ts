import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCost(cost: number) {
  return new Intl.NumberFormat("ru", {}).format(cost);
}

export async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
