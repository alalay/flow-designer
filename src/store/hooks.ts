import {
  bindActionCreators,
  ActionCreator,
  ActionCreatorsMapObject,
} from "redux";
import { useDispatch as reduxUseDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import * as actions from "./actions";
import { ReactFlowAction } from "./actions";
import { ReactFlowState } from "../types";

export const useTypedSelector: TypedUseSelectorHook<ReactFlowState> = useSelector;

export type ActionCreatorSelector<Action> = (
  acts: typeof actions
) => ActionCreator<Action>;

export type ActionSelector<Action> = (
  acts: typeof actions
) => ActionCreator<Action>; // | ActionCreatorsMapObject<Action>;

export function useStoreActions<Action extends ReactFlowAction>(
  actionSelector: ActionCreatorSelector<Action>
): ActionCreator<Action>;
export function useStoreActions<Action extends ReactFlowAction>(
  actionSelector: ActionSelector<Action>
) {
  const dispatch = reduxUseDispatch();
  const currAction = actionSelector(actions);
  const action = bindActionCreators(currAction, dispatch);
  return action;
}

export const useStoreState = useTypedSelector;
