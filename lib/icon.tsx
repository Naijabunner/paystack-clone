import React from "react";

export type IconProps = React.SVGAttributes<SVGElement>;

export default function Icon({ children, ...props }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="[&>path]:fill-inherit [&>path]:stroke-current"
      {...props}
    >
      {children}
    </svg>
  );
}
