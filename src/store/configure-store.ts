import { createStore, Store } from "redux";
import { ReactFlowState } from "../types";
import { ReactFlowAction } from "./actions";
import reactFlowReducer from "./reducer";

function configureStore(
  initialState: ReactFlowState
): Store<ReactFlowState, ReactFlowAction> {
  const store = createStore(reactFlowReducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

export default configureStore;
