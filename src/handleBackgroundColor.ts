import { canvasClass } from "./breakElement";

const selectedColor = "#CCFFFF";
let previousElement: HTMLElement | null = null;

export const handleBackGroundColor = (element: HTMLElement) => {
  if (element === previousElement) {
    return;
  }

  if (previousElement === null) {
    setColor(element);
    previousElement = element;
  }

  // Canvasを選択させないための苦肉の策
  if (element.className !== canvasClass) {
    resetColor(previousElement);
    setColor(element);
  }
  previousElement = element;
};

const resetColor = (element: HTMLElement) => {
  element.style.backgroundColor = "";
};

const setColor = (element: HTMLElement) => {
  element.style.backgroundColor = selectedColor;
};
