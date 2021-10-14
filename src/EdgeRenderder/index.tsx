import React from "react";
import BezierEdge from "../components/Edges/BezierEdge";
import { useStoreState } from "../store/hooks";
import { Position } from "../types";
import { getEdgePositions, getHandle, getSourceTargetNodes } from "./utils";

const EdgeRenderder = () => {
  const edges = useStoreState((state) => state.edges);
  const nodes = useStoreState((state) => state.nodes);

  return (
    <svg width={1000} height={300}>
      <g>
        {edges.map((edge: any) => {
          const sourceHandleId = edge.sourceHandle || null;
          const targetHandleId = edge.targetHandle || null;
          const { sourceNode, targetNode } = getSourceTargetNodes(edge, nodes);
          if (!sourceNode) {
            console.warn(
              `couldn't create edge for source id: ${edge.source}; edge id: ${edge.id}`
            );
            return null;
          }

          if (!targetNode) {
            console.warn(
              `couldn't create edge for target id: ${edge.target}; edge id: ${edge.id}`
            );
            return null;
          }

          const sourceHandle = getHandle(
            sourceNode.__rf.handleBounds.source,
            sourceHandleId
          );
          const targetHandle = getHandle(
            targetNode.__rf.handleBounds.target,
            targetHandleId
          );
          const sourcePosition = sourceHandle
            ? sourceHandle.position
            : Position.Bottom;
          const targetPosition = targetHandle
            ? targetHandle.position
            : Position.Top;

          const { sourceX, sourceY, targetX, targetY } = getEdgePositions(
            sourceNode,
            sourceHandle,
            sourcePosition,
            targetNode,
            targetHandle,
            targetPosition
          );

          return (
            <BezierEdge
              sourceX={sourceX}
              sourceY={sourceY}
              targetX={targetX}
              targetY={targetY}
            />
          );
        })}
      </g>
    </svg>
  );
};

EdgeRenderder.displayName = "EdgeRenderder";

export default EdgeRenderder;
