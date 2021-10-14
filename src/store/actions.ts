import { createAction } from "./utils";
import * as constants from "./constants";
import { Elements, NodeDimensionUpdate } from "../types";

export const setElements = (elements: Elements) =>
  createAction(constants.SET_ELEMENTS, elements);

export const updateNodeDimensions = (updates: NodeDimensionUpdate[]) =>
  createAction(constants.UPDATE_NODE_DIMENSIONS, updates);

export type ReactFlowAction = ReturnType<
  typeof setElements | typeof updateNodeDimensions
>;
