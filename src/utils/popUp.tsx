import React from "react";
import ReactDOM, { createPortal } from "react-dom";

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
export const popUpPost = (id: any, child: any): void => {
  const wrapper = document.querySelector("#wrapper");
  console.log(child);
  if (wrapper) {
    console.log("asd");
    createPortal(child, document.body);
  }

  // const wrapper = document.getElementById("wrapper");
  // const popUpWrapper = document.createElement("div");
  // // popUpWrapper.className =
  // //   "fixed w-full h-full top-0 left-0 z-10 animate-right-slide";
  // // popUpWrapper.onclick = () => clearPopUp();
};
export default function Portal({ children, parent, className }: any) {
  // Create div to contain everything
  const el = React.useMemo(() => document.createElement("div"), []);
  // On mount function
  React.useEffect(() => {
    // work out target in the DOM based on parent prop
    const target = parent && parent.appendChild ? parent : document.body;
    // Default classes
    const classList = ["portal-container"];
    // If className prop is present add each class the classList
    if (className)
      className.split(" ").forEach((item: any) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    // Append element to dom
    target.appendChild(el);
    // On unmount function
    return () => {
      // Remove element from dom
      target.removeChild(el);
    };
  }, [el, parent, className]);
  // return the createPortal function
  return ReactDOM.createPortal(children, el);
}
