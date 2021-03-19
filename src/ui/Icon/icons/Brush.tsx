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
      <path d="M 10.046875 -1.234375 L 12.703125 -3.890625 C 13.011719 -4.199219 13.164063 -4.535156 13.15625 -4.890625 C 13.15625 -5.253906 12.992188 -5.597656 12.671875 -5.921875 L 8.328125 -10.296875 C 8.171875 -10.441406 7.992188 -10.539063 7.796875 -10.59375 C 7.609375 -10.644531 7.417969 -10.636719 7.234375 -10.578125 C 7.054688 -10.523438 6.894531 -10.425781 6.75 -10.28125 C 6.613281 -10.144531 6.511719 -9.957031 6.453125 -9.71875 C 6.359375 -9.257813 6.269531 -8.871094 6.1875 -8.5625 C 6.113281 -8.257813 6.042969 -7.992188 5.984375 -7.765625 C 5.921875 -7.546875 5.847656 -7.347656 5.765625 -7.171875 C 5.691406 -7.003906 5.597656 -6.824219 5.484375 -6.640625 C 5.378906 -6.460938 5.238281 -6.253906 5.0625 -6.015625 L 5.765625 -5.328125 C 6.011719 -5.648438 6.210938 -5.941406 6.359375 -6.203125 C 6.503906 -6.472656 6.625 -6.742188 6.71875 -7.015625 C 6.820313 -7.292969 6.921875 -7.609375 7.015625 -7.953125 C 7.105469 -8.292969 7.222656 -8.71875 7.359375 -9.21875 C 7.386719 -9.339844 7.453125 -9.421875 7.546875 -9.453125 C 7.636719 -9.480469 7.726563 -9.457031 7.8125 -9.375 L 11.9375 -5.25 C 12.058594 -5.125 12.125 -4.992188 12.125 -4.859375 C 12.125 -4.734375 12.066406 -4.613281 11.953125 -4.5 L 9.375 -1.90625 Z M 2 1.953125 C 2.464844 2.417969 2.960938 2.65625 3.484375 2.65625 C 4.011719 2.664063 4.507813 2.433594 4.96875 1.96875 C 5.144531 1.800781 5.3125 1.589844 5.46875 1.34375 C 5.632813 1.09375 5.800781 0.824219 5.96875 0.546875 C 6.132813 0.265625 6.289063 0 6.4375 -0.25 C 6.582031 -0.507813 6.71875 -0.71875 6.84375 -0.875 L 8.015625 0.296875 C 8.230469 0.523438 8.472656 0.640625 8.734375 0.640625 C 8.992188 0.640625 9.234375 0.527344 9.453125 0.3125 L 10.171875 -0.421875 C 10.386719 -0.636719 10.5 -0.875 10.5 -1.125 C 10.5 -1.371094 10.386719 -1.613281 10.171875 -1.84375 L 5.78125 -6.21875 C 5.550781 -6.445313 5.308594 -6.5625 5.0625 -6.5625 C 4.8125 -6.570313 4.570313 -6.460938 4.34375 -6.234375 L 3.625 -5.515625 C 3.40625 -5.296875 3.296875 -5.054688 3.296875 -4.796875 C 3.296875 -4.546875 3.410156 -4.304688 3.640625 -4.078125 L 4.8125 -2.90625 C 4.65625 -2.78125 4.449219 -2.636719 4.203125 -2.484375 C 3.953125 -2.335938 3.683594 -2.179688 3.40625 -2.015625 C 3.125 -1.859375 2.851563 -1.695313 2.59375 -1.53125 C 2.34375 -1.375 2.132813 -1.207031 1.96875 -1.03125 C 1.5 -0.5625 1.265625 -0.0664063 1.265625 0.453125 C 1.273438 0.980469 1.519531 1.484375 2 1.953125 Z M 4.46875 -4.96875 L 4.90625 -5.390625 C 5.039063 -5.523438 5.179688 -5.523438 5.328125 -5.390625 L 9.328125 -1.375 C 9.460938 -1.238281 9.460938 -1.101563 9.328125 -0.96875 L 8.90625 -0.546875 C 8.757813 -0.390625 8.617188 -0.382813 8.484375 -0.53125 L 7.15625 -1.875 C 7.039063 -1.976563 6.914063 -2.023438 6.78125 -2.015625 C 6.65625 -2.003906 6.527344 -1.941406 6.40625 -1.828125 C 6.289063 -1.710938 6.160156 -1.527344 6.015625 -1.28125 C 5.867188 -1.03125 5.707031 -0.742188 5.53125 -0.421875 C 5.351563 -0.109375 5.164063 0.195313 4.96875 0.5 C 4.769531 0.808594 4.554688 1.078125 4.328125 1.296875 C 4.066406 1.554688 3.785156 1.6875 3.484375 1.6875 C 3.191406 1.6875 2.914063 1.554688 2.65625 1.296875 C 2.382813 1.023438 2.25 0.738281 2.25 0.4375 C 2.25 0.144531 2.378906 -0.128906 2.640625 -0.390625 C 2.855469 -0.605469 3.117188 -0.816406 3.421875 -1.015625 C 3.730469 -1.222656 4.046875 -1.414063 4.359375 -1.59375 C 4.679688 -1.769531 4.96875 -1.929688 5.21875 -2.078125 C 5.476563 -2.222656 5.660156 -2.351563 5.765625 -2.46875 C 5.878906 -2.589844 5.941406 -2.71875 5.953125 -2.84375 C 5.960938 -2.976563 5.914063 -3.101563 5.8125 -3.21875 L 4.46875 -4.546875 C 4.332031 -4.679688 4.332031 -4.820313 4.46875 -4.96875 Z M 9.15625 -4.4375 C 9.226563 -4.363281 9.367188 -4.351563 9.578125 -4.40625 C 9.785156 -4.464844 10.019531 -4.566406 10.28125 -4.703125 C 10.550781 -4.847656 10.804688 -5.015625 11.046875 -5.203125 C 11.292969 -5.386719 11.488281 -5.570313 11.625 -5.75 L 10.40625 -6.953125 C 10.351563 -6.460938 10.210938 -6.027344 9.984375 -5.65625 C 9.753906 -5.289063 9.480469 -4.949219 9.171875 -4.640625 C 9.097656 -4.566406 9.09375 -4.496094 9.15625 -4.4375 Z M 3.46875 1.140625 C 3.652344 1.140625 3.8125 1.070313 3.9375 0.9375 C 4.070313 0.8125 4.140625 0.652344 4.140625 0.46875 C 4.140625 0.28125 4.070313 0.121094 3.9375 0 C 3.8125 -0.121094 3.652344 -0.1875 3.46875 -0.1875 C 3.28125 -0.1875 3.121094 -0.121094 3 0 C 2.875 0.121094 2.8125 0.28125 2.8125 0.46875 C 2.8125 0.652344 2.875 0.8125 3 0.9375 C 3.121094 1.070313 3.28125 1.140625 3.46875 1.140625 Z M 3.46875 1.140625 " />
    </symbol>
    <use xlinkHref={"#" + name} x="-1" y="11" />
  </svg>
);

export default SVG;