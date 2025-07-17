import React from "react";
import { FaShoppingCart, FaGraduationCap, FaPlane, FaBuilding, FaBitcoin, FaMoneyCheckAlt, FaConciergeBell, FaPhoneAlt, FaBriefcase, FaHeartbeat, FaBoxOpen, FaShieldAlt, FaTaxi } from "react-icons/fa";

const industries = [
  { name: "E-COMMERCE", icon: <FaShoppingCart /> },
  { name: "EDUCATION", icon: <FaGraduationCap /> },
  { name: "TRAVEL & TOURISM", icon: <FaPlane /> },
  { name: "REAL ESTATE", icon: <FaBuilding /> },
  { name: "CRYPTO TRADING", icon: <FaBitcoin /> },
  { name: "FINTECH", icon: <FaMoneyCheckAlt /> },
  { name: "ON DEMAND SERVICES", icon: <FaConciergeBell /> },
  { name: "TELECOMMUNICATION", icon: <FaPhoneAlt /> },
  { name: "MANAGEMENT", icon: <FaBriefcase /> },
  { name: "HEALTH CARE", icon: <FaHeartbeat /> },
  { name: "FMCG", icon: <FaBoxOpen /> },
  { name: "INSURANCE", icon: <FaShieldAlt /> },
  { name: "CAB/TAXI", icon: <FaTaxi /> },
];

const Offers = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#11BAB2] mb-4">
          Industries We <span className="text-[#032B44]" >Offer</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We serve a wide range of industries with cutting-edge digital solutions and expert insights that drive innovation, growth, and transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-[#11BAB2]/10 border border-[#11BAB2]/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] animate-fadeInUp text-center"
          >
            <div className="flex items-center justify-center mb-5">
              <div className="text-[#11BAB2] text-5xl drop-shadow-xl">
                {industry.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-black tracking-wide">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
