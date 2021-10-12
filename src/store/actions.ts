import { createAction } from "./utils";
import * as constants from './constants'
import { Elements } from "../types";

export const setElements = (elements: Elements) => {return createAction(constants.SET_ELEMENTS, elements)};


export type ReactFlowAction = ReturnType<
| typeof setElements
>;
