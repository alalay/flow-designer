import React, { memo, useLayoutEffect, useRef } from "react";
import cc from "classcat";
import { WrapNodeProps } from "../../types";
import { useStoreActions } from "../../store/hooks";

// eslint-disable-next-line import/no-anonymous-default-export
export default (NodeComponent: any) => {
  const NodeWrapper = ({
    id,
    type,
    data,
    xPos,
    yPos,
    sourcePosition,
    targetPosition,
  }: WrapNodeProps) => {
    const nodeElement = useRef<HTMLDivElement>(null);
    const updateNodeDimensions = useStoreActions(
      (actions) => actions.updateNodeDimensions
    );
    
    useLayoutEffect(() => {
      if (nodeElement.current) {
        updateNodeDimensions([
          { id, nodeElement: nodeElement.current, forceUpdate: true },
        ]);
      }
    }, [id, sourcePosition, targetPosition]);
    const nodeStyle = {
      transform: `translate(${xPos}px,${yPos}px)`,
    };
    const nodeClasses = cc(["react-flow__node", `react-flow__node-${type}`]);
    return (
      <div className={nodeClasses} style={nodeStyle} ref={nodeElement}>
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
