import { launchBreakElement } from "./breakElement";
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
  const mousePosition = { x: e.pageX, y: e.pageY };
  const element = selectElement(mousePosition);
  if (!element) {
    return;
  }
  console.log(element);

  launchBreakElement(element);
});
