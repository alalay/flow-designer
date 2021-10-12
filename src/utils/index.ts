import { XYPosition, NodeExtent } from "../types";

export const clamp = (val: number, min: number = 0, max: number = 1): number =>
  Math.min(Math.max(val, min), max);

export const clampPosition = (position: XYPosition, extent: NodeExtent) => ({
  x: clamp(position.x, extent[0][0], extent[1][0]),
  y: clamp(position.y, extent[0][1], extent[1][1]),
});
