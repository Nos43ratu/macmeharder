import React from "react";

import Arrow from "./icons/Arrow";
import { IconPropsType } from "../../types/iconTypes";
import ArrowSlider from "./icons/ArrowSlider";
import Brush from "./icons/Brush";
import Hammer from "./icons/Hammer";
import Joystick from "./icons/Joystick";
import Note from "./icons/Note";
import Plane from "./icons/Plane";
import Search from "./icons/Search";
import Share from "./icons/Share";
import Star from "./icons/Star";
import StarFilled from "./icons/StarFilled";
import StarHalfFilled from "./icons/StarHalfFilled";

const Icon = ({ name, onClick, ...props }: IconPropsType) => {
  const getIcon = () => {
    switch (name) {
      case "arrow":
        return <Arrow {...props} />;
      case "arrow-slider":
        return <ArrowSlider {...props} />;
      case "brush":
        return <Brush {...props} />;
      case "hammer":
        return <Hammer {...props} />;
      case "joystick":
        return <Joystick {...props} />;
      case "note":
        return <Note {...props} />;
      case "plane":
        return <Plane {...props} />;
      case "search":
        return <Search {...props} />;
      case "share":
        return <Share {...props} />;
      case "star":
        return <Star {...props} />;
      case "star-filled":
        return <StarFilled {...props} />;
      case "star-half-filled":
        return <StarHalfFilled {...props} />;
    }
  };

  if (onClick) {
    return (
      <div
        className={"cursor-pointer flex " + props.className}
        onClick={onClick}
      >
        {getIcon()}
      </div>
    );
  } else {
    return getIcon();
  }
};

export default Icon;
