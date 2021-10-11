import React, { memo, useMemo, ComponentType, MouseEvent } from "react";
import { Elements, FlowElement, NodeTypesType, WrapNodeProps } from "../types";

interface NodeRendererProps {
  nodeTypes: NodeTypesType;
  elements: Elements;
}

const NodeRenderer = ({ nodeTypes, elements }: NodeRendererProps) => {
  return (
    <div className="react-flow__nodes">
      {elements.map((node: any) => {
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
