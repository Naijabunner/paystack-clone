import { ChevronDown } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface FeatureItem {
    imageUrl: string;
    title: string;
    description: string;
}

export interface CategoryList {
    title: string;
    items: string[];
}

export interface LargeNavigationItemProps {
    title: string;
    href?: string;
    features?: FeatureItem[];
    categories?: CategoryList[];
}

const LargeNavigationItem = ({ title, href, features, categories }: LargeNavigationItemProps) => {
    return (
        <li className="relative h-10 flex items-center group cursor-pointer text-[#011B33]">
            <span className="text-[15px] font-medium flex items-center gap-1">
                {href ? <Link href={href}>{title}</Link> : title}
              {features && features.length > 0 && <ChevronDown className="fill-[#011B33] stroke-0 size-4 transition-transform duration-300 group-hover:rotate-180" />}
            </span>
          {features && features.length > 0 && <div
                className="
      absolute left-0 top-full -2 w-fit
      bg-white border border-[#E5E7EB] rounded-md shadow-lg
      opacity-0 translate-y-2
      pointer-events-none
      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
      flex
      z-50
      overflow-hidden
    " >
                <div className=" px-[35px] py-[30px] flex flex-col gap-5 bg-white">
                    {features.map((feature, idx) => (
                        <div key={idx} className='list-none'>
                            <div className=" flex gap-3 min-w-[280px]">
                                <div className={`min-w-[50px] h-[50px] overflow-hidden rounded-full`} >
                                    <Image src={feature.imageUrl} alt={feature.title} className=' hover:scale-125 transition-transform duration-300' width={50} height={50}/>
                                </div>
                                <div className="">
                                    <p className='text-base font-medium text-[#011B33]'>
                                        {feature.title}
                                    </p>
                                    <p className='text-sm text-gray-500 mt-1 max-w-[220px]'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" bg-[#F9FBFC] flex flex-col gap-5 pl-[35px] pt-[30px] pb-[30px] pr-[45px] rounded-r-md">
                    {categories && categories.length > 0 && categories.map((category, idx) => (
                        <div key={idx} className="min-w-[128px] flex flex-col gap-3">
                            <h4 className='text-nowrap text-[#3B5E69] text-[10px] font-medium uppercase tracking-wider'>
                                {category.title}
                            </h4>
                            <ul className='flex flex-col gap-2'>
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className='text-[15px] font-medium text-[#011B33] hover:text-blue-600 transition-colors'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>}
        </li>
    )
}

export default LargeNavigationItem
