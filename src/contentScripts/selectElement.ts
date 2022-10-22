/**
 * @param mousePosition  マウス座標
 * @returns {HTMLElement} 与えられたマウスの座標にあるHTMLElement
 */
export const selectElement = (
  mousePosition: Position,
  canSelect: boolean = true
): HTMLElement | null => {
  if (!canSelect) {
    return null;
  }

  const viewPos: Position = {
    x: mousePosition.x - window.scrollX,
    y: mousePosition.y - window.scrollY,
  };

  const element = document.elementFromPoint(
    viewPos.x,
    viewPos.y
  ) as HTMLElement | null;

  return element;
};
