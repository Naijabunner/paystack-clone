import Icon, { IconProps } from "@/lib/icon";
import React from "react";

export default function CotedIvoireFlag({ ...props }: Readonly<IconProps>) {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_343_36014)">
        <path
          d="M12 24C13.4678 24 14.8739 23.736 16.1739 23.2536L16.6956 12L16.1739 0.746391C14.8739 0.264047 13.4678 0 12 0C10.5321 0 9.12602 0.264047 7.82609 0.746391L7.30432 12L7.82604 23.2536C9.12602 23.736 10.5321 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M0 11.9997C0 17.1593 3.2565 21.5578 7.82611 23.2533V0.746094C3.2565 2.44161 0 6.84012 0 11.9997Z"
          fill="#FF9811"
        />
        <path
          d="M16.1739 0.746094V23.2534C20.7435 21.5578 24 17.1593 24 11.9997C24 6.84013 20.7435 2.44161 16.1739 0.746094Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_343_36014">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}
