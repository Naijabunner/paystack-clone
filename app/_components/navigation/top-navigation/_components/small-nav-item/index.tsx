import { ChevronDown } from "lucide-react"
import Link from "next/link";

export interface SmallNavigationItemProps {
    title: string;
    href?: string;
    links?: { label: string; href?: string }[];
}

const SmallNavigationItem = ({ title, href, links }: SmallNavigationItemProps) => {
    return (
        <li className="relative text-[15px] font-medium flex items-center gap-1 h-10 group cursor-pointer text-[#011B33]">
            {href ? <Link href={href}>{title}</Link> : title}
            {links && links.length > 0 && <ChevronDown className="fill-[#011B33] stroke-0 size-4 transition-transform duration-300 group-hover:rotate-180" />}
            {links && links.length > 0 && <ul
                className="
      absolute left-0 top-full  p-5 flex flex-col gap-1.5
      bg-white border border-[#E5E7EB] rounded-md shadow-lg
 w-[150px]
      opacity-0 translate-y-2
      pointer-events-none

      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
        z-50
    "
            >
                {links.map((link, idx) => (
                    <li key={idx} className="  cursor-pointer whitespace- text-[15px] text-wrap w-full font-medium hover:text-[#011B33]">
                        {link.label}
                    </li>
                ))}
            </ul>}
        </li>
    )
}

export default SmallNavigationItem
