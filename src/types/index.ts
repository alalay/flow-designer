import React, {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ElementId = string;
export type TranslateExtent = [[number, number], [number, number]];
export type NodeExtent = TranslateExtent;

enum ArrowHeadType {
  Arrow = "arrow",
  ArrowClosed = "arrowclosed",
}

export enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom",
}

export interface XYPosition {
  x: number;
  y: number;
}
export interface Dimensions {
  width: number;
  height: number;
}
export interface Node<T = any> {
  id: ElementId;
  position: XYPosition;
  type?: string;
  __rf?: any;
  data?: T;
  style?: CSSProperties;
  className?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  isHidden?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
}
export interface Edge<T = any> {
  id: ElementId;
  type?: string;
  source: ElementId;
  target: ElementId;
  sourceHandle?: ElementId | null;
  targetHandle?: ElementId | null;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
  style?: CSSProperties;
  animated?: boolean;
  arrowHeadType?: ArrowHeadType;
  isHidden?: boolean;
  data?: T;
  className?: string;
}
export interface Connection {
  source: ElementId | null;
  target: ElementId | null;
  sourceHandle: ElementId | null;
  targetHandle: ElementId | null;
}
export type FlowElement<T = any> = Node<T> | Edge<T>;
export type Elements<T = any> = Array<FlowElement<T>>;
export type NodeTypesType = { [key: string]: ReactNode };

export interface NodeProps<T = any> {
  id: ElementId;
  type: string;
  data: T;
  selected: boolean;
  isConnectable: boolean;
  xPos?: number;
  yPos?: number;
  targetPosition?: Position;
  sourcePosition?: Position;
  isDragging?: boolean;
}

export interface WrapNodeProps<T = any> {
  id: ElementId;
  type: string;
  data?: T;
  // selected: boolean;
  // scale: number;
  xPos: number;
  yPos: number;
  // isSelectable: boolean;
  // isDraggable: boolean;
  // isConnectable: boolean;
  // selectNodesOnDrag: boolean;
  onClick?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDoubleClick?: (event: ReactMouseEvent, node: Node) => void;
  onMouseEnter?: (event: ReactMouseEvent, node: Node) => void;
  onMouseMove?: (event: ReactMouseEvent, node: Node) => void;
  onMouseLeave?: (event: ReactMouseEvent, node: Node) => void;
  onContextMenu?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStart?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDrag?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStop?: (event: ReactMouseEvent, node: Node) => void;
  style?: CSSProperties;
  className?: string;
  sourcePosition?: Position;
  targetPosition?: Position;
  isHidden?: boolean;
  isInitialized?: boolean;
  snapToGrid?: boolean;
  // snapGrid?: SnapGrid;
  isDragging?: boolean;
  // resizeObserver: ResizeObserver | null;
}

export interface ReactFlowState {
  nodes: Node[];
  edges: Edge[];
  nodeExtent: NodeExtent;
}

export interface EdgeProps {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

export interface HandleElement extends XYPosition, Dimensions {
  id?: ElementId | null;
  position: Position;
}

export interface NodeDimensionUpdate {
  id: ElementId;
  nodeElement: HTMLDivElement;
  forceUpdate?: boolean;
}
