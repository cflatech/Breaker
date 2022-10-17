import { handleBackGroundColor } from "./handleBackgroundColor";

document.body.addEventListener("mousemove", function (e) {
  const element = selectElement({ x: e.pageX, y: e.pageY });
  if (!element) {
    return;
  }

  handleBackGroundColor(element);
});
