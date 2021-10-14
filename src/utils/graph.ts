import { clampPosition } from ".";
import { Node, Edge, Connection, NodeExtent } from "../types";

export const isEdge = (element: Node | Connection | Edge): element is Edge =>
  "id" in element && "source" in element && "target" in element;

export const isNode = (element: Node | Connection | Edge): element is Node =>
  "id" in element && !("source" in element) && !("target" in element);

export const parseNode = (node: Node, nodeExtent: NodeExtent): Node => {
  return {
    ...node,
    id: node.id.toString(),
    type: node.type || "default",
    __rf: {
      position: clampPosition(node.position, nodeExtent),
      width: null,
      height: null,
      handleBounds: {},
      isDragging: false,
    },
  };
};

export const parseEdge = (edge: Edge): Edge => {
  return {
    ...edge,
    type: edge.type || "default",
  };
};
