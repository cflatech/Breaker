/**
 * @param mousePosition  マウス座標
 * @returns {HTMLElement} 与えられたマウスの座標にあるHTMLElement
 */
const selectElement = (mousePosition: Position): HTMLElement | null => {
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
