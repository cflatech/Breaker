import { Explosion } from "./explosion";

export const launchBreakElement = (element: HTMLElement) => {
  const canvas = createCanvasElement(element);
  document.body.appendChild(canvas);

  const explosion = new Explosion(canvas, element);
  explosion.draw(performance.now());
  explosion.playSound();
};

const createCanvasElement = (element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.width = elementRect.width;
  canvas.height = elementRect.height;
  canvas.style.top = `${elementRect.top + scrollY}px`;
  canvas.style.left = `${elementRect.left + scrollX}px`;

  return canvas;
};
