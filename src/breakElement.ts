import { Explosion } from "./explosion";

export const launchBreakElement = (element: HTMLElement) => {
  const canvas = createCanvasElement(element);
  document.body.appendChild(canvas);

  const drawCircle = new Explosion(canvas, element);
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
