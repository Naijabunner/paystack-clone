import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LinkUiProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkUi: React.FC<LinkUiProps> = ({ href, children, className }) => (
  <Link
    href={href}
    className={`text-body-r cursor-pointer flex gap-2 group items-center text-primary font-medium ${className ?? ""}`}
  >
    <ChevronRight className="stroke-primary group-hover:bg-primary/80 transition-all ease-in-out group-hover:stroke-white group-hover:border- border border-primary rounded-full size-5 stroke-2 p-[2px]" />
    <span className="relative after:absolute after:w-full after:bg-primary/10 after:h-[30%] after:bottom-[2px] after:left-0 z-[2] after:-z-[2]">
      {children}
    </span>
  </Link>
);

export default LinkUi;
