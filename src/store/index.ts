import { ReactFlowState } from "../types";
import configureStore from "./configure-store";

export const initialState: ReactFlowState = {
  nodes: [],
  edges: [],
  nodeExtent: [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
};

const store = configureStore(initialState);

export default store;
