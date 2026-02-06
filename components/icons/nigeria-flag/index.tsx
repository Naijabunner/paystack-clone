import Icon, { IconProps } from "@/lib/icon";
import React from "react";

export default function NigeriaFlag({ ...props }: Readonly<IconProps>) {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M0 11.9997C0 17.1593 3.2565 21.5577 7.82611 23.2533V0.746094C3.2565 2.44156 0 6.84012 0 11.9997Z"
          fill="#6DA544"
        />
        <path
          d="M24 11.9997C24 6.84013 20.7435 2.44156 16.1739 0.746094V23.2534C20.7435 21.5578 24 17.1593 24 11.9997Z"
          fill="#6DA544"
        />
      </g>
    </Icon>
  );
}
