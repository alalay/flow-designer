import InputNode from "../components/Nodes/InputNode";
import DefaultNode from "../components/Nodes/DefaultNode";
import OutputNode from "../components/Nodes/OutputNode";
import NodeRenderer from "../NodeRenderer";
import { Elements } from "../types";
import wrapNode from "../components/Nodes/wrapNode";
import ElementUpdater from "../ElementUpdater";
import Wrapper from "./Wrapper";
import EdgeRenderder from "../EdgeRenderder";

const defaultNodeTypes = {
  input: wrapNode(InputNode),
  default: wrapNode(DefaultNode),
  output: wrapNode(OutputNode),
};

interface ReactFlowProps {
  elements: Elements;
}
function ReactFlow(props: ReactFlowProps) {
  return (
    <div>
      <Wrapper>
        <ElementUpdater elements={props.elements} />
        <NodeRenderer nodeTypes={defaultNodeTypes} />
        <EdgeRenderder />
      </Wrapper>
    </div>
  );
}

export default ReactFlow;
