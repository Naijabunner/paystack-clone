"use client";
import CotedIvoireFlag from "@/components/icons/cotedIvoire-flag";
import EgyptFlag from "@/components/icons/egypt-flag";
import KenyaFlag from "@/components/icons/kenya-flag";
import NigeriaFlag from "@/components/icons/nigeria-flag";
import RwandaFlag from "@/components/icons/rwanda-flag";
import SouthAfricaFlag from "@/components/icons/south-africa-flag";
import { useState } from "react";

const item = [
  { label: "Nigeria", flag: NigeriaFlag },
  { label: "Cote d’Ivoire", flag: CotedIvoireFlag },
  { label: "Egypt", flag: EgyptFlag },
  { label: "Kenya", flag: KenyaFlag },
  { label: "Rwanda", flag: RwandaFlag },
  { label: "South Africa", flag: SouthAfricaFlag },
];

export const NavDropdownCountry = () => {
  const [SelectedCountry, setSelectedCountry] = useState("Nigeria");
  const selectedCountryItem = item.find((i) => i.label === SelectedCountry);
  const SelectedCountryFlag = selectedCountryItem ? selectedCountryItem.flag : null;

  return (
    <li className="relative group px- py-2 flex flex-col justify-center items-center cursor-pointer hover:text-white transition-all ease-in-out hover:bg-[#ffffff1d] rounded-lg">
      <button
        aria-haspopup="true"
        aria-expanded="false"
        className="bg-transparent border-none outline-none font-normal text-secondary flex items-end hover:text-primary gap-2 cursor-pointer transition-all ease-in-out "
        tabIndex={0}
      >
        {SelectedCountryFlag && <SelectedCountryFlag />}
      </button>
      <ul className="absolute  top-12 w-[200px] -right-5  pb-2.5  text-body-r font-medium  bg-background  shadow-xl rounded-2xl  overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all translate-y-7 group-hover:translate-y-0 duration-700 z-50">
        {item?.map((sub, index) => {
          const Flag = sub.flag;
          return (
            <li key={index} className="pt-2.5 px-4 flex flex-col   ">
              <div className="h-full !w-full  flex items-end pb-1 text-secondary hover:text-primary ">
                <div
                  className=" flex items-center gap-3"
                  onClick={() => setSelectedCountry(sub.label)}
                >
                  <Flag />
                  <span>{sub.label}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
