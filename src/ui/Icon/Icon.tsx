import React from "react";

import Arrow from "./icons/Arrow";
import { IconPropsType } from "./types";
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
        return <Arrow {...props} name={name} />;
      case "arrow-slider":
        return <ArrowSlider {...props} name={name} />;
      case "brush":
        return <Brush {...props} name={name} />;
      case "hammer":
        return <Hammer {...props} name={name} />;
      case "joystick":
        return <Joystick {...props} name={name} />;
      case "note":
        return <Note {...props} name={name} />;
      case "plane":
        return <Plane {...props} name={name} />;
      case "search":
        return <Search {...props} name={name} />;
      case "share":
        return <Share {...props} name={name} />;
      case "star":
        return <Star {...props} name={name} />;
      case "star-filled":
        return <StarFilled {...props} name={name} />;
      case "star-half-filled":
        return <StarHalfFilled {...props} name={name} />;
      default:
        return <div />;
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
