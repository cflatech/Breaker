import { BreakerState, playSoundKey, selectElementKey } from "./breakerState";
import { launchBreakElement } from "./breakElement";
import { handleBackGroundColor } from "./handleBackgroundColor";
import { selectElement } from "./selectElement";

const state = new BreakerState();
async function updateState() {
  const storage = await chrome.storage.local.get([
    selectElementKey,
    playSoundKey,
  ]);
  state.set(selectElementKey, storage[selectElementKey]);
  state.set(playSoundKey, storage[playSoundKey]);
}

document.body.addEventListener("mousemove", async (e) => {
  updateState();
  const element = selectElement(
    { x: e.pageX, y: e.pageY },
    state.get(selectElementKey)
  );
  if (!element) {
    return;
  }

  handleBackGroundColor(element);
});

document.body.addEventListener("click", async (e) => {
  if (state.get(selectElementKey) === false) {
    return;
  }
  e.preventDefault();

  const mousePosition = { x: e.pageX, y: e.pageY };
  const element = await selectElement(mousePosition);
  if (!element) {
    return;
  }

  launchBreakElement(element, state.get(playSoundKey));
});
