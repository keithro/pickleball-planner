import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// For merging Tailwind class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
