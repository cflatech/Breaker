export const launchBreakElement = (element: HTMLElement) => {
  element.style.opacity = "0";
  const canvas = createCanvasElement(element);
  document.body.appendChild(canvas);

  const drawCircle = new Circle(canvas);
  drawCircle.draw();
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

class Circle {
  context: CanvasRenderingContext2D;
  x: number = 0;
  speed: number = 1;

  constructor(private canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("failt get canvas context");
    }

    this.context = context;
  }

  draw = () => {
    requestAnimationFrame(this.draw);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.arc(
      this.canvas.width / 2 + this.x,
      this.canvas.height / 2,
      20,
      0,
      2 * Math.PI,
      false
    );
    this.context.fillStyle = "#000000";
    this.context.fill();
    this.speed = Math.abs(this.x) > 20 ? -this.speed : this.speed;
    this.x += this.speed;
  };
}
