export const selectElementKey = "canSelectElement";
export const drawExplosionKey = "canDrawExplosion";
export const playSoundKey = "canPlaySound";
export type Key =
  | typeof selectElementKey
  | typeof drawExplosionKey
  | typeof playSoundKey;

export class BreakerState {
  constructor() {
    localStorage.getItem(selectElementKey) ??
      localStorage.setItem(selectElementKey, this.getStateValue(true));
    localStorage.getItem(drawExplosionKey) ??
      localStorage.setItem(drawExplosionKey, this.getStateValue(true));
    localStorage.getItem(playSoundKey) ??
      localStorage.setItem(playSoundKey, this.getStateValue(true));
  }

  set(key: Key, flag: boolean) {
    localStorage.setItem(key, this.getStateValue(flag));
  }

  get(key: Key) {
    return localStorage.getItem(key) !== "false";
  }

  private getStateValue(state: boolean) {
    return state == true ? "true" : "false";
  }
}
