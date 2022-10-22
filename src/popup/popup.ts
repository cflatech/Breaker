import {
  BreakerState,
  playSoundKey,
  selectElementKey,
} from "../contentScripts/breakerState";

function initialize() {
  const selectCheckbox = document.getElementById(
    "checkbox-select_element"
  ) as HTMLInputElement;
  const soundCheckbox = document.getElementById(
    "checkbox-sound"
  ) as HTMLInputElement;

  const state = new BreakerState();

  selectCheckbox.checked = state.get(selectElementKey);
  chrome.storage.local.set({ [selectElementKey]: selectCheckbox.checked });
  soundCheckbox.checked = state.get(playSoundKey);
  chrome.storage.local.set({ [playSoundKey]: soundCheckbox.checked });

  selectCheckbox?.addEventListener("change", () => {
    state.set(selectElementKey, selectCheckbox.checked);
    chrome.storage.local.set({ [selectElementKey]: selectCheckbox.checked });
  });

  soundCheckbox?.addEventListener("change", () => {
    state.set(playSoundKey, soundCheckbox.checked);
    chrome.storage.local.set({ [playSoundKey]: soundCheckbox.checked });
  });
}

window.onload = () => {
  initialize();
};
