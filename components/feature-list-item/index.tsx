import { Check } from "lucide-react";
import React from "react";

type FeatureListItemProps = {
  children: React.ReactNode;
  iconPosition?: "start" | "center";
};

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children, iconPosition = "center" }) => (
  <li className={`flex gap-3 items-${iconPosition} font-semibold text-base text-[clamp(14px,1vw,16px)]`}>
    <Check className="min-w-7.5 p-2 max-md:p-1 max-md:h-6 max-md:w-6 stroke-3 rounded-md h-8.75 stroke-primary bg-primary/10" />
    {children}
  </li>
);

export default FeatureListItem;
