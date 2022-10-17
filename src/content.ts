import { breakElement } from "./breakElement";
import { handleBackGroundColor } from "./handleBackgroundColor";
import { selectElement } from "./selectElement";

document.body.addEventListener("mousemove", function (e) {
  const element = selectElement({ x: e.pageX, y: e.pageY });
  if (!element) {
    return;
  }

  handleBackGroundColor(element);
});

document.body.addEventListener("click", function (e) {
  e.preventDefault();
  const element = selectElement({ x: e.pageX, y: e.pageY });
  if (!element) {
    return;
  }

  breakElement(element);
});
