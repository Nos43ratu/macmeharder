import { CSSProperties, MouseEventHandler } from "react";

export interface SvgProps {
  style?: CSSProperties;
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
  viewBox?: string;
}

export interface IconPropsType {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
  onClick?: MouseEventHandler;
}
