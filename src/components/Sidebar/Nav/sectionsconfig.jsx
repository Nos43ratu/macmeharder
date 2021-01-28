import Icon from "../../../ui/Icon";
import React from "react";

export const sidebarItems = [
  {
    id: 1,
    name: "Discover",
    icon: <Icon name="star" width={20} height={20} fill="#1D96FF" />,
    path: "/discover",
  },
  {
    id: 2,
    name: "Create",
    icon: <Icon name="brush" width={20} height={20} fill="#1D96FF" />,
    path: "/create",
  },
  {
    id: 3,
    name: "Work",
    icon: <Icon name="plane" width={20} height={20} fill="#1D96FF" />,
    path: "/work",
  },
  {
    id: 4,
    name: "Play",
    icon: <Icon name="joystick" width={20} height={20} fill="#1D96FF" />,
    path: "/play",
  },
  {
    id: 5,
    name: "Develop",
    icon: <Icon name="hammer" width={20} height={20} fill="#1D96FF" />,
    path: "/develop",
  },
  {
    id: 6,
    name: "Posts",
    icon: <Icon name="note" width={20} height={20} fill="#1D96FF" />,
    path: "/posts",
  },
];
