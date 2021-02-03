import React from "react";

export const clearPopUp = (): void => {
  const wrapper = document.getElementById("wrapper");
  wrapper && wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
};
export const popUpImg = (src: string): void => {
  const wrapper = document.getElementById("wrapper");
  const popUpWrapper = document.createElement("div");
  popUpWrapper.className =
    "fixed w-full h-full bg-steelGray bg-opacity-75 z-10 flex justify-center items-center";
  popUpWrapper.onclick = () => clearPopUp();
  const img = new Image();
  img.src = src;
  img.className = "absolute";
  popUpWrapper.appendChild(img);
  wrapper && wrapper.appendChild(popUpWrapper);
};
