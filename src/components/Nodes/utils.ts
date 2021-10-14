import { HandleElement, Position } from "../../types";
import { getDimensions } from "../../utils";

/**
 * 获取node中handle(s)的位置信息
 */
export function getHandleBounds(nodeElement: HTMLDivElement) {
  const bounds = nodeElement.getBoundingClientRect();
  return {
    source: getHandleBoundsByHandleType(".source", nodeElement, bounds),
    target: getHandleBoundsByHandleType(".target", nodeElement, bounds),
  };
}

export function getHandleBoundsByHandleType(
  selector: string,
  nodeElement: HTMLDivElement,
  parentBounds: ClientRect | DOMRect
) {
  const handles = nodeElement.querySelectorAll(selector);

  const handlesArray = Array.from(handles) as HTMLDivElement[];

  return handlesArray.map((handle): HandleElement => {
    const bounds = handle.getBoundingClientRect();
    const dimensions = getDimensions(handle);
    const handleId = handle.getAttribute("data-handleid");
    const handlePosition = handle.getAttribute("data-handlepos") as Position;
    return {
      id: handleId,
      position: handlePosition,
      x: bounds.left - parentBounds.left,
      y: bounds.top - parentBounds.top,
      ...dimensions,
    };
  });
}
