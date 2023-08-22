import React, { ReactNode } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Prop {
  children: ReactNode | IconType;
}

export const Button = ({ children }: Prop) => {
  const icon = children as IconType;
  return (
    <button className="white transition h-black">
      {typeof children === "string"
        ? children
        : React.isValidElement(icon)
        ? icon
        : null}
    </button>
  );
};
