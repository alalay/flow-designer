import { initialState } from ".";
import { ReactFlowState } from "../types";
import { ReactFlowAction } from "./actions";
import * as constants from "./constants";

export default function reactFlowReducer(
  state: ReactFlowState = initialState,
  action: ReactFlowAction
): ReactFlowState {
  switch (action.type) {
    case constants.SET_ELEMENTS:
      return state;

    default:
      return state;
  }
}
