import React, { memo, ComponentType } from "react";
import cc from "classcat";
import { EdgeProps } from "../../types";

interface EdgeWrapperProps {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  type?: string;
  animated?: boolean;
}

const wrapEdge = (EdgeComponent: ComponentType<EdgeProps>) => {
  const EdgeWrapper = ({
    sourceX,
    sourceY,
    targetX,
    targetY,
    type,
    animated,
  }: EdgeWrapperProps) => {
    
    const edgeClasses = cc([
      "react-flow__edge",
      `react-flow__edge-${type}`,
      { animated },
    ]);
    return (
      <g className={edgeClasses}>
        <EdgeComponent
          sourceX={sourceX}
          sourceY={sourceY}
          targetX={targetX}
          targetY={targetY}
        />
      </g>
    );
  };

  EdgeWrapper.displayName = "EdgeWrapper";

  return memo(EdgeWrapper);
};

export default wrapEdge;
