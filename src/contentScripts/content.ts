import { playSoundKey, selectElementKey } from "./breakerState";
import { launchBreakElement } from "./breakElement";
import { handleBackGroundColor } from "./handleBackgroundColor";
import { selectElement } from "./selectElement";

let canSelectElement: boolean = false;
let canPlaySound: boolean = false;
async function updateState() {
  const storage = await chrome.storage.local.get([
    selectElementKey,
    playSoundKey,
  ]);
  canSelectElement = storage[selectElementKey];
  canPlaySound = storage[playSoundKey];
}

document.body.addEventListener("mousemove", async (e) => {
  updateState();
  const element = selectElement({ x: e.pageX, y: e.pageY }, canSelectElement);

  if (!element) {
    return;
  }

  handleBackGroundColor(element);
});

document.body.addEventListener("click", async (e) => {
  if (canSelectElement === false) {
    return;
  }
  e.preventDefault();

  const mousePosition = { x: e.pageX, y: e.pageY };
  const element = await selectElement(mousePosition);
  if (!element) {
    return;
  }

  launchBreakElement(element, canPlaySound);
});
