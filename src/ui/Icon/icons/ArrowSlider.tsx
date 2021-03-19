import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "5px",
  height = "13px",
  viewBox = "0 0 5px 13px",
  className = "",
  fill = "#FFFFFF",
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    version="1.1"
  >
    <defs>
      <g>
        <symbol overflow="visible" id="glyph0-0">
          <path d="M 0.59375 2.890625 L 11.421875 2.890625 L 11.421875 1.25 L 0.59375 1.25 Z M 0.59375 0.359375 L 11.421875 0.359375 L 11.421875 -1.28125 L 0.59375 -1.28125 Z M 0.59375 -2.171875 L 11.421875 -2.171875 L 11.421875 -3.8125 L 0.59375 -3.8125 Z M 0.59375 -4.71875 L 11.421875 -4.71875 L 11.421875 -6.359375 L 0.59375 -6.359375 Z M 0.59375 -7.25 L 11.421875 -7.25 L 11.421875 -8.890625 L 0.59375 -8.890625 Z M 0.59375 -9.78125 L 11.421875 -9.78125 L 11.421875 -11.421875 L 0.59375 -11.421875 Z M 0.59375 -9.78125 " />
        </symbol>
        <symbol overflow="visible" id="glyph0-1">
          <path d="M 2.578125 0.59375 L 4.09375 -3.171875 C 4.144531 -3.316406 4.195313 -3.457031 4.25 -3.59375 C 4.300781 -3.738281 4.328125 -3.878906 4.328125 -4.015625 C 4.328125 -4.148438 4.300781 -4.285156 4.25 -4.421875 C 4.195313 -4.566406 4.144531 -4.710938 4.09375 -4.859375 L 2.578125 -8.609375 C 2.535156 -8.730469 2.464844 -8.828125 2.375 -8.890625 C 2.28125 -8.960938 2.175781 -9 2.0625 -9 C 1.875 -9 1.714844 -8.933594 1.59375 -8.8125 C 1.46875 -8.695313 1.40625 -8.550781 1.40625 -8.375 C 1.40625 -8.28125 1.425781 -8.175781 1.46875 -8.0625 C 1.507813 -7.957031 1.550781 -7.863281 1.59375 -7.78125 L 3.234375 -3.65625 L 3.234375 -4.390625 L 1.59375 -0.25 C 1.550781 -0.164063 1.507813 -0.0703125 1.46875 0.03125 C 1.425781 0.144531 1.40625 0.25 1.40625 0.34375 C 1.40625 0.519531 1.46875 0.664063 1.59375 0.78125 C 1.714844 0.902344 1.875 0.96875 2.0625 0.96875 C 2.175781 0.96875 2.28125 0.929688 2.375 0.859375 C 2.464844 0.785156 2.535156 0.695313 2.578125 0.59375 Z M 2.578125 0.59375 " />
        </symbol>
      </g>
    </defs>
    <g id="surface1">
      <g fill={fill}>
        <use xlinkHref="#glyph0-1" x="-1" y="9" />
      </g>
    </g>
  </svg>
);

export default SVG;