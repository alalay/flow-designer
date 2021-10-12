import { FC } from "react";

import { Provider } from "react-redux";
import store from "../store";

const Wrapper: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

Wrapper.displayName = "ReactFlowWrapper";

export default Wrapper;
