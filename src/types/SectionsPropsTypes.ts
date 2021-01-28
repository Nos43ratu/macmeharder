import { ReactNode } from "react";

export type SectionPropsType = {
  children: ReactNode;
  swipe: boolean;
  title?: string;
  border?: boolean;
};
