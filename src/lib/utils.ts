import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openNavMobile = () => {
  var menu = document.getElementById("nav-menu");
  var isClosed = !menu?.classList.contains("isOpened");
  if (isClosed) {
    menu?.classList.remove("w-0");
    menu?.classList.add("w-screen");
    menu?.classList.add("isOpened");
  } else {
    menu?.classList.remove("w-screen");
    menu?.classList.remove("isOpened");
    menu?.classList.add("w-0");
  }
}