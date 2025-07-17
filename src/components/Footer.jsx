import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-br from-[#02131e] via-[#032433] to-[#02131e] text-white py-12 px-6 md:px-20 mt-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left: Branding & Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#11BAB2]">Strategic Media Journey</h2>
                    <p className="text-md text-gray-300 max-w-md">
                        At SMJ, we provide cutting-edge digital solutions to businesses worldwide, focusing on innovation, quality, and results.
                    </p>
                </div>

                {/* Right: Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-[#11BAB2] text-xl mt-1" />
                        <p className="text-sm text-gray-300">
                            Commercial 20, RYK, Pakistan.<br />
                            Jumerah Lake Towers (JLT) S Cluster, Dubai, U.A.E
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaGlobe className="text-[#11BAB2] text-xl mt-1" />
                        <a href="https://www.smjsols.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-[#11BAB2] transition-colors">
                            www.smjsols.com
                        </a>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-[#11BAB2] text-xl mt-1" />
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>+92 321 671 6065</p>
                            <p>+92 302 241 0936</p>
                            <p>+971 54 586 7895</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-12">
                © {new Date().getFullYear()} SMJ Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
