import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "17px",
  height = "17px",
  viewBox = "0 0 17 17",
  className = "",
  fill = "#FFFFFF",
  name,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    version="1.1"
    fill={fill}
  >
    <symbol overflow="visible" id={name}>
      <path d="M 3.515625 1.40625 C 3.636719 1.496094 3.773438 1.527344 3.921875 1.5 C 4.074219 1.476563 4.25 1.398438 4.4375 1.265625 L 7.328125 -0.859375 L 10.234375 1.265625 C 10.417969 1.398438 10.585938 1.476563 10.734375 1.5 C 10.886719 1.527344 11.03125 1.496094 11.15625 1.40625 C 11.277344 1.3125 11.351563 1.183594 11.375 1.03125 C 11.402344 0.882813 11.382813 0.707031 11.3125 0.5 L 10.171875 -2.921875 L 13.09375 -5.015625 C 13.269531 -5.148438 13.394531 -5.285156 13.46875 -5.421875 C 13.539063 -5.554688 13.550781 -5.695313 13.5 -5.84375 C 13.457031 -5.988281 13.363281 -6.097656 13.21875 -6.171875 C 13.082031 -6.242188 12.902344 -6.28125 12.6875 -6.28125 L 9.09375 -6.25 L 8 -9.6875 C 7.925781 -9.902344 7.832031 -10.066406 7.71875 -10.171875 C 7.613281 -10.285156 7.480469 -10.34375 7.328125 -10.34375 C 7.179688 -10.34375 7.050781 -10.285156 6.9375 -10.171875 C 6.832031 -10.066406 6.742188 -9.902344 6.671875 -9.6875 L 5.578125 -6.25 L 1.984375 -6.28125 C 1.765625 -6.28125 1.582031 -6.242188 1.4375 -6.171875 C 1.300781 -6.097656 1.207031 -5.992188 1.15625 -5.859375 C 1.101563 -5.703125 1.113281 -5.554688 1.1875 -5.421875 C 1.269531 -5.285156 1.398438 -5.148438 1.578125 -5.015625 L 4.5 -2.921875 L 3.359375 0.5 C 3.285156 0.707031 3.257813 0.882813 3.28125 1.03125 C 3.308594 1.183594 3.390625 1.3125 3.515625 1.40625 Z M 7.328125 -1.921875 L 7.328125 -8.8125 C 7.347656 -8.8125 7.359375 -8.792969 7.359375 -8.765625 L 8.28125 -5.671875 C 8.320313 -5.535156 8.378906 -5.441406 8.453125 -5.390625 C 8.535156 -5.347656 8.640625 -5.328125 8.765625 -5.328125 L 12 -5.390625 C 12.027344 -5.390625 12.050781 -5.382813 12.0625 -5.375 C 12.0625 -5.363281 12.050781 -5.351563 12.03125 -5.34375 L 9.359375 -3.5 C 9.285156 -3.445313 9.226563 -3.394531 9.1875 -3.34375 C 9.15625 -3.289063 9.140625 -3.226563 9.140625 -3.15625 C 9.140625 -3.082031 9.15625 -3.007813 9.1875 -2.9375 L 10.25 0.125 C 10.257813 0.144531 10.265625 0.160156 10.265625 0.171875 C 10.253906 0.179688 10.230469 0.179688 10.203125 0.171875 L 7.640625 -1.8125 C 7.535156 -1.882813 7.429688 -1.921875 7.328125 -1.921875 Z M 7.328125 -1.921875 " />
    </symbol>
    <use xlinkHref={"#" + name} x="-1" y="11" />
  </svg>
);

export default SVG;
