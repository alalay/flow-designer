import configureStore from "./configure-store";

export const initialState = {
  nodes: [],
  edges: [],
};

const store = configureStore(initialState);

export default store;
