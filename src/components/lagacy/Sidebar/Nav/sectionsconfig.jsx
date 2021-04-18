import Icon from "../../../../ui/Icon";
import React from "react";

export const sidebarItems = [
  {
    id: 1,
    name: "Discover",
    icon: <Icon name="star" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/discover",
  },
  {
    id: 2,
    name: "Create",
    icon: <Icon name="brush" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/create",
  },
  {
    id: 3,
    name: "Work",
    icon: <Icon name="plane" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/work",
  },
  {
    id: 4,
    name: "Play",
    icon: <Icon name="joystick" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/play",
  },
  {
    id: 5,
    name: "Develop",
    icon: <Icon name="hammer" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/develop",
  },
  {
    id: 6,
    name: "Posts",
    icon: <Icon name="note" fill="#1D96FF" className="w-8 md:w-5" />,
    path: "/posts",
  },
];
