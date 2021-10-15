import { initialState } from ".";
import { getHandleBounds } from "../components/Nodes/utils";
import { ReactFlowState, Node, Edge } from "../types";
import { getDimensions } from "../utils";
import { isNode, isEdge, parseNode, parseEdge } from "../utils/graph";
import { ReactFlowAction, updateNodeDimensions } from "./actions";
import * as constants from "./constants";

type NextElements = {
  nextNodes: Node[];
  nextEdges: Edge[];
};

export default function reactFlowReducer(
  state: ReactFlowState = initialState,
  action: ReactFlowAction
): ReactFlowState {
  switch (action.type) {
    case constants.SET_ELEMENTS: {
      const propElements = action.payload;
      const nextElements: NextElements = {
        nextNodes: [],
        nextEdges: [],
      };
      const { nextNodes, nextEdges } = propElements.reduce(
        (res, propElement): NextElements => {
          if (isNode(propElement)) {
            const storeNode = state.nodes.find(
              (node) => node.id === propElement.id
            );
            if (storeNode) {
              const updateNode: Node = {
                ...storeNode,
                ...propElement,
              };

              res.nextNodes.push(updateNode);
            } else {
              res.nextNodes.push(
                parseNode(propElement as Node, state.nodeExtent)
              );
            }
          } else if (isEdge(propElement)) {
            const storeEdge = state.edges.find(
              (se) => se.id === propElement.id
            );
            if (storeEdge) {
              res.nextEdges.push({
                ...storeEdge,
                ...propElement,
              });
            } else {
              res.nextEdges.push(parseEdge(propElement));
            }
          }
          return res;
        },
        nextElements
      );
      return { ...state, nodes: nextNodes, edges: nextEdges };
    }
    case constants.UPDATE_NODE_DIMENSIONS: {
      const updateNodes = state.nodes.map((node) => {
        const update = action.payload.find((u) => u.id === node.id);
        if (update) {
          const dimensions = getDimensions(update.nodeElement);
          const doUpdate =
            node.__rf.width !== dimensions.width ||
            node.__rf.height !== dimensions.height ||
            update.forceUpdate;
          if (doUpdate) {
            const handleBounds = getHandleBounds(update.nodeElement);
            return {
              ...node,
              __rf: {
                ...node.__rf,
                ...dimensions,
                handleBounds,
              },
            };
          }
        }

        return node;
      });
      return {
        ...state,
        nodes: updateNodes,
      };
    }
    default:
      return state;
  }
}
