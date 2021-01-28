import { CSSProperties, MouseEventHandler } from "react";

export interface SvgProps {
  style?: CSSProperties;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  className?: string;
  viewBox?: string;
}

export interface IconPropsType {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  onClick?: MouseEventHandler;
}
