import React from "react";
import { SvgProps } from "../types";

const SVG = ({
  width = "15px",
  height = "16px",
  viewBox = "0 0 15 16",
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
      <path d="M 5.59375 -1.71875 C 6.039063 -1.71875 6.460938 -1.800781 6.859375 -1.96875 C 7.253906 -2.144531 7.597656 -2.382813 7.890625 -2.6875 C 8.191406 -2.988281 8.425781 -3.332031 8.59375 -3.71875 C 8.769531 -4.113281 8.859375 -4.535156 8.859375 -4.984375 C 8.859375 -5.429688 8.769531 -5.851563 8.59375 -6.25 C 8.425781 -6.644531 8.191406 -6.988281 7.890625 -7.28125 C 7.597656 -7.582031 7.253906 -7.816406 6.859375 -7.984375 C 6.460938 -8.160156 6.039063 -8.25 5.59375 -8.25 C 5.144531 -8.25 4.722656 -8.160156 4.328125 -7.984375 C 3.929688 -7.816406 3.582031 -7.582031 3.28125 -7.28125 C 2.988281 -6.988281 2.753906 -6.644531 2.578125 -6.25 C 2.410156 -5.851563 2.328125 -5.429688 2.328125 -4.984375 C 2.328125 -4.535156 2.410156 -4.113281 2.578125 -3.71875 C 2.753906 -3.332031 2.988281 -2.988281 3.28125 -2.6875 C 3.582031 -2.382813 3.929688 -2.144531 4.328125 -1.96875 C 4.722656 -1.800781 5.144531 -1.71875 5.59375 -1.71875 Z M 5.59375 -0.671875 C 5 -0.671875 4.441406 -0.78125 3.921875 -1 C 3.398438 -1.226563 2.941406 -1.539063 2.546875 -1.9375 C 2.148438 -2.332031 1.835938 -2.789063 1.609375 -3.3125 C 1.390625 -3.832031 1.28125 -4.390625 1.28125 -4.984375 C 1.28125 -5.585938 1.390625 -6.144531 1.609375 -6.65625 C 1.835938 -7.175781 2.148438 -7.632813 2.546875 -8.03125 C 2.941406 -8.425781 3.398438 -8.738281 3.921875 -8.96875 C 4.441406 -9.195313 5 -9.3125 5.59375 -9.3125 C 6.183594 -9.3125 6.742188 -9.195313 7.265625 -8.96875 C 7.785156 -8.738281 8.242188 -8.425781 8.640625 -8.03125 C 9.035156 -7.632813 9.34375 -7.175781 9.5625 -6.65625 C 9.789063 -6.132813 9.90625 -5.574219 9.90625 -4.984375 C 9.90625 -4.390625 9.789063 -3.832031 9.5625 -3.3125 C 9.34375 -2.789063 9.035156 -2.332031 8.640625 -1.9375 C 8.242188 -1.539063 7.785156 -1.226563 7.265625 -1 C 6.742188 -0.78125 6.183594 -0.671875 5.59375 -0.671875 Z M 11.0625 1.296875 C 10.96875 1.296875 10.871094 1.277344 10.78125 1.25 C 10.695313 1.21875 10.617188 1.164063 10.546875 1.09375 L 7.625 -1.828125 L 8.671875 -2.84375 L 11.578125 0.0625 C 11.648438 0.132813 11.703125 0.210938 11.734375 0.296875 C 11.761719 0.386719 11.78125 0.484375 11.78125 0.578125 C 11.78125 0.710938 11.746094 0.832031 11.6875 0.9375 C 11.632813 1.050781 11.550781 1.140625 11.4375 1.203125 C 11.332031 1.261719 11.207031 1.296875 11.0625 1.296875 Z M 11.0625 1.296875 " />
    </symbol>
    <use xlinkHref={"#" + name} x="-1" y="10" />
  </svg>
);

export default SVG;
