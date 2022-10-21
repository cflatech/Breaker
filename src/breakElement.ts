import { Explosion } from "./explosion";

export const launchBreakElement = (element: HTMLElement) => {
  element.style.opacity = "0";
  const canvas = createCanvasElement(element);
  document.body.appendChild(canvas);

  const drawCircle = new Explosion(canvas);
  drawCircle.draw(performance.now());
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
