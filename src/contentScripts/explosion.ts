export class Explosion {
  private readonly spriteSize = 240;
  private readonly spriteEndFrame = 7;
  private spriteFrame = 0;
  private beforeFrameTime: DOMHighResTimeStamp | null = null;

  private context: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private sound: HTMLAudioElement;

  constructor(private canvas: HTMLCanvasElement, private element: HTMLElement) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("failt get canvas context");
    }

    const imageUrl = chrome.runtime.getURL("images/explosion.png");
    this.image = new Image();
    this.image.src = imageUrl;

    const soundUrl = chrome.runtime.getURL("sounds/explosion.mp3");
    this.sound = new Audio();
    this.sound.src = soundUrl;
    this.context = context;
  }

  draw = (timestamp: DOMHighResTimeStamp) => {
    if (
      this.beforeFrameTime !== null &&
      timestamp - this.beforeFrameTime < 50
    ) {
      requestAnimationFrame(this.draw);
      return;
    }

    if (this.spriteFrame === 0) {
      this.element.style.opacity = "0";
    }

    if (this.spriteFrame === this.spriteEndFrame) {
      this.element.style.display = "none";
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.remove();
      this.sound.remove();
      return;
    }

    requestAnimationFrame(this.draw);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawExplosion();
    this.beforeFrameTime = timestamp;
  };

  private drawExplosion() {
    const spriteDrawSize = Math.min(this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.image,
      this.spriteSize * this.spriteFrame,
      0,
      this.spriteSize,
      this.spriteSize,
      this.canvas.width / 2 - spriteDrawSize / 2,
      this.canvas.height / 2 - spriteDrawSize / 2,
      spriteDrawSize,
      spriteDrawSize
    );
    this.spriteFrame++;
  }

  playSound() {
    this.sound.play();
  }
}
