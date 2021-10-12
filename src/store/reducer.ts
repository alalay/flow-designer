import { initialState } from ".";
import { ReactFlowState, Node, Edge } from "../types";
import { isNode, isEdge, parseNode } from "../utils/graph";
import { ReactFlowAction } from "./actions";
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
    case constants.SET_ELEMENTS:
      const propElements = action.payload;
      const nextElements: NextElements = {
        nextNodes: [],
        nextEdges: [],
      };
      const { nextNodes, nextEdges } = propElements.reduce(
        (res, propElement): NextElements => {
          const storeNode = state.nodes.find(node => node.id === propElement.id);
          if (storeNode) {
            const updateNode: Node = {
              ...storeNode,
              ...propElement,
            };

            res.nextNodes.push(updateNode);
          } else {
            res.nextNodes.push(parseNode(propElement as Node, state.nodeExtent));
          }
          if (isNode(propElement)) {
          } else if (isEdge(propElement)) {
          }
          return res;
        },
        nextElements
      );
      return { ...state, nodes: nextNodes, edges: nextEdges };

    default:
      return state;
  }
}
