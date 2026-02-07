"use client";

import React, { useState } from "react";
import { OFFICE_COLUMNS } from "../constants";
import styled from "@emotion/styled";
import { ChevronRight } from "lucide-react";

const AccordionContent = styled.div<{ isOpen: boolean }>`
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out;
    max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    margin-top: ${(props) => (props.isOpen ? "12px" : "0")};

    @media (min-width: 768px) {
        max-height: none;
        opacity: 1;
        margin-top: 0;
        overflow: visible;
    }
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};

    @media (min-width: 768px) {
        display: none;
    }
`;

const FooterOffices = () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (city: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [city]: !prev[city],
        }));
    };

    return (
        <>
            {OFFICE_COLUMNS.map((col, idx) => (
                <div key={idx} className="space-y-12 max-md:space-y-0 max-md:border-b max-md:border-gray-100 last:border-b-0">
                    {col.offices.map((office, oIdx) => {
                        const isOpen = !!openSections[office.city];
                        return (
                            <div key={oIdx} className="space-y-3 max-md:space-y-0">
                                <button
                                    onClick={() => toggleSection(office.city)}
                                    className="w-full flex justify-between items-center text-left py-4 md:py-0 md:cursor-default"
                                >
                                    <h4 className="font-bold text-[clamp(16px,1.2vw,18px)]">{office.city}</h4>
                                    <IconWrapper isOpen={isOpen}>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </IconWrapper>
                                </button>

                                <AccordionContent isOpen={isOpen}>
                                    <div className="pb-4 md:pb-0 space-y-3">
                                        <p className="text-[clamp(14px,1vw,16px)] whitespace-pre-line leading-relaxed">
                                            {office.address}
                                        </p>
                                        {office.phone && (
                                            <p className="text-[#0BA4DB] text-[clamp(14px,1vw,16px)]">
                                                {office.phone}
                                            </p>
                                        )}
                                    </div>
                                </AccordionContent>
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
};

export default FooterOffices;
