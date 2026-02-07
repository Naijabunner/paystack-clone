import React from "react";
import FooterBanner from "./_components/footer-banner";
import FooterNav from "./_components/footer-nav";
import FooterContact from "./_components/footer-contact";
import FooterOffices from "./_components/footer-offices";

const Footer = () => {
    return (
        <footer className="bg-white py-20 font-segoe-ui">
            <FooterBanner />

            <div className="container mx-auto px-3 max-md:px-4 max-w-310">
                {/* Top Section */}
                <FooterNav />

                <div className="border-t border-gray-100 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-secondary">
                        {/* Contact Column */}
                        <FooterContact />

                        {/* Office Columns */}
                        <FooterOffices />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;