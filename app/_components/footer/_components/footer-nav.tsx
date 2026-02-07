"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_SECTIONS } from "../constants";
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

const FooterNav = () => {
    const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({});

    const toggleSection = (idx: number) => {
        setOpenSections((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 text-secondary">
            {FOOTER_SECTIONS.map((section, idx) => {
                const isOpen = !!openSections[idx];
                return (
                    <div key={idx} className="space-y-6 max-md:space-y-0">
                        <button
                            onClick={() => toggleSection(idx)}
                            className="w-full flex justify-between items-center text-left py-0 md:cursor-default"
                        >
                            <h4 className="font-bold text-body-m">{section.title}</h4>
                            <IconWrapper isOpen={isOpen}>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </IconWrapper>
                        </button>

                        <AccordionContent isOpen={isOpen}>
                            {section.links ? (
                                <ul className="space-y-3 pb-4 md:pb-0">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx} className="first:hidden">
                                            <a
                                                href={link.href}
                                                className=" text-[clamp(14px,0.9vw,16px)] hover:text-[#0BA4DB] transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="space-y-8 pb-4 md:pb-0">
                                    {section.subSections?.map((sub, sIdx) => (
                                        <div key={sIdx} className="space-y-4">
                                            <h4 className="font-bold text-[clamp(16px,1.2vw,18px)]">{sub.title}</h4>
                                            <ul className="space-y-3">
                                                {sub.links.map((link, lIdx) => (
                                                    <li key={lIdx}>
                                                        <Link
                                                            href={link.href}
                                                            className="text-[clamp(14px,0.9vw,16px)] hover:text-[#0BA4DB] transition-colors"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </AccordionContent>
                    </div>
                );
            })}
        </div>
    );
};

export default FooterNav;
