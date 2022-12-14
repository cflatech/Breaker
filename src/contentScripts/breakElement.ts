import { Explosion } from "./explosion";

export const canvasClass = "breaker-explosion";

export const launchBreakElement = (
  element: HTMLElement,
  canPlaySound: boolean = true
) => {
  const canvas = createCanvasElement(element);
  document.body.appendChild(canvas);

  const explosion = new Explosion(canvas, element);
  explosion.draw(performance.now());
  canPlaySound && explosion.playSound();
};

const createCanvasElement = (element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  canvas.className = canvasClass;
  canvas.style.position = "absolute";

  const rectMax = Math.max(elementRect.width, elementRect.height);
  canvas.width = elementRect.width;
  canvas.height = elementRect.height;

  canvas.width = rectMax;
  canvas.height = rectMax;
  canvas.style.top = `${
    elementRect.top + scrollY + (elementRect.height - rectMax) / 2
  }px`;
  canvas.style.left = `${
    elementRect.left + scrollX + (elementRect.width - rectMax) / 2
  }px`;

  return canvas;
};
