import React, { memo } from "react";
import { EdgeProps } from "../../types";
import { getCenter } from "./utils";

interface GetBezierPathParams {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

function getBezierPath({
  sourceX,
  sourceY,
  targetX,
  targetY,
}: GetBezierPathParams): string {
  const [_centerX, _centerY] = getCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const path = `M${sourceX},${sourceY} C${sourceX},${_centerY} ${targetX},${_centerY} ${targetX},${targetY}`;
  return path;
}

const BezierEdge = ({ sourceX, sourceY, targetX, targetY }: EdgeProps) => {
  const path = getBezierPath({ sourceX, sourceY, targetX, targetY });
  return <path d={path} className="react-flow__edge-path" />;
};

export default BezierEdge;
