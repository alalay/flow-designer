import React, { memo } from "react";
import cc from "classcat";
import { WrapNodeProps } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (NodeComponent: any) => {
  const NodeWrapper = ({ id, type, data, xPos, yPos }: WrapNodeProps) => {
    const nodeStyle = {
      transform: `translate(${xPos}px,${yPos}px)`,
    };
    const nodeClasses = cc(["react-flow__node", `react-flow__node-${type}`]);
    return (
      <div className={nodeClasses} style={nodeStyle}>
        <NodeComponent
          id={id}
          data={data}
          type={type}
          xPos={xPos}
          yPos={yPos}
        />
      </div>
    );
  };

  NodeWrapper.displayName = "NodeWrapper";
  return memo(NodeWrapper);
};
