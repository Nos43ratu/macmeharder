import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "17px",
  height = "19px",
  viewBox = "0 0 12.5 14",
  className = "",
  fill = "#FFFFFF",
  name,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={viewBox}
    className={className}
    version="1.1"
    fill={fill}
  >
    <symbol overflow="visible" id={name}>
      <path d="M 1.625 1.109375 L 2.609375 2.109375 C 2.867188 2.355469 3.140625 2.472656 3.421875 2.453125 C 3.699219 2.429688 3.976563 2.273438 4.25 1.984375 L 10.390625 -4.796875 L 9.78125 -5.421875 L 3.6875 1.265625 C 3.59375 1.378906 3.496094 1.441406 3.40625 1.453125 C 3.3125 1.460938 3.199219 1.410156 3.078125 1.296875 L 2.4375 0.65625 C 2.3125 0.53125 2.253906 0.414063 2.265625 0.3125 C 2.285156 0.21875 2.347656 0.121094 2.453125 0.03125 L 9.03125 -6.15625 L 8.421875 -6.765625 L 1.75 -0.53125 C 1.457031 -0.257813 1.300781 0.015625 1.28125 0.296875 C 1.257813 0.574219 1.375 0.847656 1.625 1.109375 Z M 5.34375 -9.359375 C 5.21875 -9.234375 5.144531 -9.089844 5.125 -8.9375 C 5.113281 -8.78125 5.144531 -8.644531 5.21875 -8.53125 C 5.289063 -8.425781 5.394531 -8.339844 5.53125 -8.28125 C 5.664063 -8.21875 5.828125 -8.210938 6.015625 -8.265625 C 6.429688 -8.355469 6.847656 -8.394531 7.265625 -8.375 C 7.679688 -8.363281 8.085938 -8.226563 8.484375 -7.96875 L 8.15625 -7.171875 C 8.0625 -6.929688 8.035156 -6.714844 8.078125 -6.53125 C 8.117188 -6.351563 8.222656 -6.179688 8.390625 -6.015625 L 9.671875 -4.71875 C 9.824219 -4.5625 9.972656 -4.464844 10.109375 -4.4375 C 10.242188 -4.414063 10.398438 -4.421875 10.578125 -4.453125 L 11.15625 -4.546875 L 11.5 -4.203125 L 11.484375 -3.890625 C 11.472656 -3.753906 11.488281 -3.621094 11.53125 -3.5 C 11.582031 -3.375 11.675781 -3.238281 11.8125 -3.09375 L 12.265625 -2.671875 C 12.398438 -2.523438 12.550781 -2.445313 12.71875 -2.4375 C 12.894531 -2.4375 13.054688 -2.507813 13.203125 -2.65625 L 14.859375 -4.3125 C 15.003906 -4.457031 15.070313 -4.613281 15.0625 -4.78125 C 15.0625 -4.945313 14.988281 -5.101563 14.84375 -5.25 L 14.40625 -5.6875 C 14.269531 -5.820313 14.136719 -5.914063 14.015625 -5.96875 C 13.890625 -6.019531 13.757813 -6.039063 13.625 -6.03125 L 13.3125 -6 L 12.96875 -6.34375 L 13.09375 -6.953125 C 13.132813 -7.117188 13.121094 -7.273438 13.0625 -7.421875 C 13.007813 -7.574219 12.898438 -7.742188 12.734375 -7.921875 L 11.5 -9.140625 C 11.019531 -9.617188 10.507813 -9.972656 9.96875 -10.203125 C 9.425781 -10.441406 8.878906 -10.566406 8.328125 -10.578125 C 7.773438 -10.585938 7.242188 -10.488281 6.734375 -10.28125 C 6.222656 -10.070313 5.757813 -9.761719 5.34375 -9.359375 Z M 6.296875 -9.125 C 6.636719 -9.363281 7.003906 -9.53125 7.390625 -9.625 C 7.773438 -9.726563 8.164063 -9.757813 8.5625 -9.71875 C 8.957031 -9.675781 9.335938 -9.566406 9.703125 -9.390625 C 10.074219 -9.210938 10.421875 -8.964844 10.734375 -8.65625 L 12.09375 -7.296875 C 12.164063 -7.234375 12.207031 -7.167969 12.21875 -7.109375 C 12.238281 -7.046875 12.238281 -6.960938 12.21875 -6.859375 L 12.046875 -6.03125 L 12.921875 -5.15625 L 13.484375 -5.1875 C 13.542969 -5.195313 13.59375 -5.191406 13.625 -5.171875 C 13.664063 -5.160156 13.710938 -5.128906 13.765625 -5.078125 L 14.0625 -4.78125 L 12.71875 -3.4375 L 12.421875 -3.75 C 12.367188 -3.800781 12.335938 -3.84375 12.328125 -3.875 C 12.316406 -3.902344 12.3125 -3.957031 12.3125 -4.03125 L 12.34375 -4.578125 L 11.484375 -5.453125 L 10.625 -5.3125 C 10.53125 -5.289063 10.449219 -5.285156 10.390625 -5.296875 C 10.335938 -5.316406 10.273438 -5.359375 10.203125 -5.421875 L 9.109375 -6.515625 C 9.035156 -6.585938 8.992188 -6.65625 8.984375 -6.71875 C 8.972656 -6.777344 8.988281 -6.863281 9.03125 -6.96875 L 9.53125 -8.15625 C 9.082031 -8.582031 8.582031 -8.875 8.03125 -9.03125 C 7.476563 -9.183594 6.914063 -9.179688 6.34375 -9.015625 C 6.300781 -9.003906 6.273438 -9.007813 6.265625 -9.03125 C 6.253906 -9.058594 6.265625 -9.09375 6.296875 -9.125 Z M 6.296875 -9.125" />
    </symbol>
    <use xlinkHref={"#" + name} x="-2" y="11" />
  </svg>
);

export default SVG;
