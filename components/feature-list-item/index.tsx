import { Check } from "lucide-react";
import React from "react";

type FeatureListItemProps = {
  children: React.ReactNode;
  iconPosition?: "start" | "center";
};

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children, iconPosition = "center" }) => (
  <li className={`flex gap-3 items-${iconPosition} font-semibold text-base`}>
    <Check className="min-w-[30px] p-2 stroke-3 rounded-md h-[35px] stroke-primary bg-primary/10" />
    {children}
  </li>
);

export default FeatureListItem;
