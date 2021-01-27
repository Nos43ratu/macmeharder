import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "16px",
  height = "16px",
  viewBox = "0 0 16px 16px",
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
          <path d="M 4.109375 -1.1875 L 7.78125 -1.1875 C 7.871094 -1.1875 7.953125 -1.21875 8.015625 -1.28125 C 8.085938 -1.351563 8.125 -1.4375 8.125 -1.53125 C 8.125 -1.621094 8.085938 -1.703125 8.015625 -1.765625 C 7.953125 -1.835938 7.871094 -1.875 7.78125 -1.875 L 4.109375 -1.875 C 4.003906 -1.875 3.914063 -1.835938 3.84375 -1.765625 C 3.78125 -1.703125 3.75 -1.621094 3.75 -1.53125 C 3.75 -1.4375 3.78125 -1.351563 3.84375 -1.28125 C 3.914063 -1.21875 4.003906 -1.1875 4.109375 -1.1875 Z M 4.109375 -2.84375 L 9.890625 -2.84375 C 9.992188 -2.84375 10.078125 -2.875 10.140625 -2.9375 C 10.210938 -2.996094 10.25 -3.082031 10.25 -3.1875 C 10.25 -3.277344 10.210938 -3.359375 10.140625 -3.421875 C 10.078125 -3.492188 9.992188 -3.53125 9.890625 -3.53125 L 4.109375 -3.53125 C 4.003906 -3.53125 3.914063 -3.492188 3.84375 -3.421875 C 3.78125 -3.359375 3.75 -3.277344 3.75 -3.1875 C 3.75 -3.082031 3.78125 -2.996094 3.84375 -2.9375 C 3.914063 -2.875 4.003906 -2.84375 4.109375 -2.84375 Z M 4.109375 -4.484375 L 9.890625 -4.484375 C 9.992188 -4.484375 10.078125 -4.515625 10.140625 -4.578125 C 10.210938 -4.648438 10.25 -4.738281 10.25 -4.84375 C 10.25 -4.933594 10.210938 -5.015625 10.140625 -5.078125 C 10.078125 -5.148438 9.992188 -5.1875 9.890625 -5.1875 L 4.109375 -5.1875 C 4.003906 -5.1875 3.914063 -5.148438 3.84375 -5.078125 C 3.78125 -5.015625 3.75 -4.933594 3.75 -4.84375 C 3.75 -4.738281 3.78125 -4.648438 3.84375 -4.578125 C 3.914063 -4.515625 4.003906 -4.484375 4.109375 -4.484375 Z M 3.203125 1.15625 L 10.8125 1.15625 C 11.394531 1.15625 11.835938 1.003906 12.140625 0.703125 C 12.441406 0.410156 12.59375 -0.0234375 12.59375 -0.609375 L 12.59375 -7.375 C 12.59375 -7.957031 12.441406 -8.394531 12.140625 -8.6875 C 11.835938 -8.988281 11.394531 -9.140625 10.8125 -9.140625 L 3.203125 -9.140625 C 2.609375 -9.140625 2.160156 -8.988281 1.859375 -8.6875 C 1.554688 -8.394531 1.40625 -7.957031 1.40625 -7.375 L 1.40625 -0.609375 C 1.40625 -0.0234375 1.554688 0.410156 1.859375 0.703125 C 2.160156 1.003906 2.609375 1.15625 3.203125 1.15625 Z M 3.15625 0.140625 C 2.914063 0.140625 2.730469 0.0742188 2.609375 -0.046875 C 2.484375 -0.167969 2.421875 -0.359375 2.421875 -0.609375 L 2.421875 -5.765625 C 2.421875 -6.011719 2.484375 -6.203125 2.609375 -6.328125 C 2.730469 -6.449219 2.914063 -6.515625 3.15625 -6.515625 L 10.84375 -6.515625 C 11.082031 -6.515625 11.265625 -6.449219 11.390625 -6.328125 C 11.511719 -6.203125 11.578125 -6.011719 11.578125 -5.765625 L 11.578125 -0.609375 C 11.578125 -0.359375 11.511719 -0.167969 11.390625 -0.046875 C 11.265625 0.0742188 11.082031 0.140625 10.84375 0.140625 Z M 3.15625 0.140625 " />
        </symbol>
      </g>
    </defs>
    <g id="surface1">
      <g fill={fill}>
        <use xlinkHref="#glyph0-1" x="-1" y="10" />
      </g>
    </g>
  </svg>
);

export default SVG;
