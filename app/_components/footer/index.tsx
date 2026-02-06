import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const FOOTER_SECTIONS = [
    {
        title: "Why Paystack",
        links: [
            { label: "Why Choose Paystack", href: "#" },
            { label: "Success Rates", href: "#" },
            { label: "For Entrepreneurs", href: "#" },
            { label: "For Corporates", href: "#" },
            { label: "For International Companies", href: "#" },
            { label: "For Startups", href: "#" },
            { label: "For Fintechs", href: "#" },
            { label: "For Agencies", href: "#" },
            { label: "For Schools", href: "#" },
            { label: "For Betting", href: "#" },
        ],
    },
    {
        title: "Pricing",
        subSections: [
            {
                title: "Pricing",
                links: [
                    { label: "Nigeria", href: "#" },
                    { label: "Ghana", href: "#" },
                    { label: "South Africa", href: "#" },
                    { label: "Kenya", href: "#" },
                    { label: "Côte d'Ivoire", href: "#" },
                ],
            },
            {
                title: "Customers",
                links: [{ label: "Testimonials", href: "#" }],
            },
            {
                title: "Learn",
                links: [
                    { label: "Blog", href: "#" },
                    { label: "Guides", href: "#" },
                    { label: "Video Tutorials", href: "#" },
                    { label: "Decode Fintech", href: "#" },
                    { label: "Commerce", href: "#" },
                    { label: "Terminal", href: "#" },
                ],
            },
        ],
    },
    {
        title: "Developers",
        subSections: [
            {
                title: "Developers",
                links: [
                    { label: "Overview", href: "#" },
                    { label: "Documentation", href: "#" },
                    { label: "Integrations", href: "#" },
                    { label: "Status Page", href: "#" },
                ],
            },
            {
                title: "Community",
                links: [
                    { label: "Service Partner Directory", href: "#" },
                    { label: "Nigeria Logos", href: "#" },
                ],
            },
            {
                title: "Support",
                links: [
                    { label: "Help Desk", href: "#" },
                    { label: "Contact Us", href: "#" },
                    { label: "Why Was I Debited?", href: "#" },
                    { label: "Register Your Business", href: "#" },
                ],
            },
        ],
    },
    {
        title: "About",
        links: [
            { label: "Company", href: "#" },
            { label: "Changelog", href: "#" },
            { label: "Subscribe", href: "#" },
            { label: "Compliance", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Media Kit", href: "#" },
            { label: "Privacy & Terms", href: "#" },
        ],
    },
];

const OFFICE_COLUMNS = [
    {
        offices: [
            {
                city: "Lagos",
                address: "126 Joel Ogunnaike Street,\nIkeja GRA, Ikeja,\nLagos, Nigeria",
                phone: "+234 201 631 6160",
            },
            {
                city: "Accra",
                address: "VIVO Place,\nA2 Cantonments City Street,\nCantonments,\nAccra, Ghana",
            },
            {
                city: "Abidjan",
                address: "AfricaWorks,\nRue Du 7 Décembre,\nZone 4/C,\nAbidjan, Côte D'Ivoire",
            },
        ],
    },
    {
        offices: [
            {
                city: "San Francisco",
                address: "354 Oyster Point Blvd.,\nSouth San Francisco,\nCA 94080\nUnited States",
            },
            {
                city: "Dubai",
                address: "Office 338,\nBuilding 16,\nDubai Internet City, Dubai,\nUnited Arab Emirates",
            },
        ],
    },
    {
        offices: [
            {
                city: "Cape Town",
                address: "Unit 6, 22fifty Building 1,\n32 Jamieson Street,\nCape Town 8000\nSouth Africa",
            },
            {
                city: "Nairobi",
                address: "The Pavilion (1st Floor)\nLower Kabete Road, Westlands\nNairobi, Kenya",
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-white py-20 font-segoe-ui">
            <div className="container mx-auto px-14 max-w-335">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 text-secondary">
                    {FOOTER_SECTIONS.map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            {section.links ? (
                                <>
                                    <h4 className="font-bold text-body-m">{section.title}</h4>
                                    <ul className="space-y-3">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <a
                                                    href={link.href}
                                                    className="text-body-r hover:text-primary transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <div className="space-y-8">
                                    {section.subSections?.map((sub, sIdx) => (
                                        <div key={sIdx} className="space-y-4">
                                            <h4 className="font-bold text-body-m">{sub.title}</h4>
                                            <ul className="space-y-3">
                                                {sub.links.map((link, lIdx) => (
                                                    <li key={lIdx}>
                                                        <a
                                                            href={link.href}
                                                            className="text-body-r hover:text-primary transition-colors"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-secondary">
                        {/* Contact Column */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="font-bold text-body-m">Contact</h4>
                                <a href="mailto:hello@paystack.com" className="text-primary text-body-r hover:underline">
                                    hello@paystack.com
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="text-secondary hover:text-primary transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-secondary hover:text-primary transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-secondary hover:text-primary transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-secondary hover:text-primary transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-secondary hover:text-primary transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                            <div className="pt-4 space-y-2">
                                <p className="text-body-s text-gray-400">Paystack is a Stripe company</p>
                                <div className="w-20">
                                    <Image
                                        src="https://paystack.com/assets/img/logos/stripe-plain.svg"
                                        alt="Stripe"
                                        width={80}
                                        height={33}
                                        className="w-full grayscale opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Office Columns */}
                        {OFFICE_COLUMNS.map((col, idx) => (
                            <div key={idx} className="space-y-12">
                                {col.offices.map((office, oIdx) => (
                                    <div key={oIdx} className="space-y-3">
                                        <h4 className="font-bold text-body-m">{office.city}</h4>
                                        <p className="text-body-r whitespace-pre-line leading-relaxed">
                                            {office.address}
                                        </p>
                                        {office.phone && (
                                            <p className="text-primary text-body-r">
                                                {office.phone}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;