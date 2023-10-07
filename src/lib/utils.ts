import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function selectNavItem(document: Document, id: string) {
  var selectedItem: HTMLElement;
  var classnames: string[] = [
    "selected-nav", "bg-white",
    "text-[#D8A93F]", "border-l-0",
    "border", "border-[#D8A93F]",
    "text-right"
  ];
  var selectedItems = document.getElementsByClassName("selected-nav");
  if (selectedItems.length > 0) {
    var oldItem = selectedItems[0];
    classnames.forEach(classname => {
      oldItem.classList.remove(classname);
    })
  }
  selectedItem = document.getElementById(id)!;
  if (selectedItem) {
    classnames.forEach(classname => {
      selectedItem.classList.add(classname)
    })
  }
}