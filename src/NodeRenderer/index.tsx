import React, { ComponentType } from "react";
import { useStoreState } from "../store/hooks";
import { NodeTypesType, WrapNodeProps } from "../types";

interface NodeRendererProps {
  nodeTypes: NodeTypesType;
}

const NodeRenderer = ({ nodeTypes }: NodeRendererProps) => {
  const nodes = useStoreState((state) => state.nodes);
  return (
    <div className="react-flow__nodes">
      {nodes.map((node: any) => {
        const nodeType = node.type || "default";
        const NodeComponent = nodeTypes[
          nodeType
        ] as ComponentType<WrapNodeProps>;
        return <NodeComponent
                id={node.id}
                type={nodeType}
                xPos={node.position.x}
                yPos={node.position.y}
                data={node.data}
        />;
      })}
    </div>
  );
};

export default NodeRenderer;
