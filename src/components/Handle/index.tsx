import React, { memo } from "react";
import cc from "classcat";
import { Position } from "../../types";

const Handle = ({
  children,
  type = "source",
  position = Position.Top,
}: any) => {
  const isTarget = type === "target";
  const handleClasses = cc([
    "react-flow__handle",
    `react-flow__handle-${position}`,
    { source: !isTarget, target: isTarget },
  ]);
  return <div className={handleClasses}>{children}</div>;
};

Handle.displayName = "Handle";

export default memo(Handle);
