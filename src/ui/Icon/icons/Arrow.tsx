import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "8px",
  height = "13px",
  viewBox = "0 0 8px 13px",
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
          <path d="M 7.4375 -4 C 7.4375 -3.914063 7.417969 -3.835938 7.390625 -3.765625 C 7.367188 -3.691406 7.320313 -3.621094 7.25 -3.5625 L 2.90625 0.703125 C 2.789063 0.804688 2.648438 0.859375 2.484375 0.859375 C 2.378906 0.859375 2.277344 0.832031 2.1875 0.78125 C 2.09375 0.738281 2.019531 0.667969 1.96875 0.578125 C 1.914063 0.484375 1.890625 0.382813 1.890625 0.28125 C 1.890625 0.125 1.953125 -0.015625 2.078125 -0.140625 L 6.03125 -4 L 2.078125 -7.859375 C 1.953125 -7.980469 1.890625 -8.125 1.890625 -8.28125 C 1.890625 -8.394531 1.914063 -8.492188 1.96875 -8.578125 C 2.019531 -8.667969 2.09375 -8.738281 2.1875 -8.78125 C 2.277344 -8.832031 2.378906 -8.859375 2.484375 -8.859375 C 2.648438 -8.859375 2.789063 -8.804688 2.90625 -8.703125 L 7.25 -4.4375 C 7.320313 -4.375 7.367188 -4.304688 7.390625 -4.234375 C 7.417969 -4.160156 7.4375 -4.082031 7.4375 -4 Z M 7.4375 -4 " />
        </symbol>
      </g>
    </defs>
    <g id="surface1">
      <g fill={fill}>
        <use xlinkHref="#glyph0-1" x="-2" y="9" />
      </g>
    </g>
  </svg>
);

export default SVG;