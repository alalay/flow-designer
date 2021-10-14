import {
  Node,
  HandleElement,
  Position,
  XYPosition,
  Edge,
  ElementId,
} from "../types";

interface EdgePositions {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

function getHandlePosition(
  position: Position,
  node: Node,
  handle: any | null = null
): XYPosition {
  const x = node.__rf.position.x;
  const y = node.__rf.position.y;
  const width = node.__rf.width;
  const height = node.__rf.height;

  switch (position) {
    case Position.Top:
      return {
        x: x + width / 2,
        y,
      };
    case Position.Right:
      return {
        x: x + width,
        y: y + height / 2,
      };
    case Position.Bottom:
      return {
        x: x + width / 2,
        y: y + height,
      };
    case Position.Left:
      return {
        x,
        y: y + height / 2,
      };
  }
}

export function getEdgePositions(
  sourceNode: Node,
  sourceHandle: HandleElement | unknown,
  sourcePosition: Position,
  targetNode: Node,
  targetHandle: HandleElement | unknown,
  targetPosition: Position
): EdgePositions {
  const sourceHandlePos = getHandlePosition(
    sourcePosition,
    sourceNode,
    sourceHandle
  );
  const targetHandlePos = getHandlePosition(
    targetPosition,
    targetNode,
    targetHandle
  );

  return {
    sourceX: sourceHandlePos.x,
    sourceY: sourceHandlePos.y,
    targetX: targetHandlePos.x,
    targetY: targetHandlePos.y,
  };
}
interface SourceTargetNode {
  sourceNode: Node | null;
  targetNode: Node | null;
}

export const getSourceTargetNodes = (
  edge: Edge,
  nodes: Node[]
): SourceTargetNode => {
  return nodes.reduce(
    (res, node) => {
      if (node.id === edge.source) {
        res.sourceNode = node;
      }
      if (node.id === edge.target) {
        res.targetNode = node;
      }
      return res;
    },
    { sourceNode: null, targetNode: null } as SourceTargetNode
  );
};

export function getHandle(
  bounds: HandleElement[],
  handleId: ElementId | null
): HandleElement | null {
  if (!bounds) {
    return null;
  }
  let handle = null;
  if (bounds.length === 1 || !handleId) {
    handle = bounds[0];
  } else if (handleId) {
    handle = bounds.find((d) => d.id === handleId);
  }

  return typeof handle === "undefined" ? null : handle;
}
