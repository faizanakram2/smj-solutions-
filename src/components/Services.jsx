import React from "react";
import { FaBullhorn, FaFingerprint, FaCogs, FaCode, FaSearch, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Grow your business with our expert digital marketing strategies and campaigns.",
  },
  {
    title: "Biometric Solutions",
    icon: <FaFingerprint className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Secure and modern biometric authentication and attendance systems.",
  },
  {
    title: "ERP System",
    icon: <FaCogs className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Streamline your business operations with our robust ERP solutions.",
  },
  {
    title: "Software Development",
    icon: <FaCode className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Custom software development tailored to your business needs.",
  },
  {
    title: "SEO",
    icon: <FaSearch className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Boost your online presence and ranking with our SEO expertise.",
  },
  {
    title: "E-commerce Services",
    icon: <FaShoppingCart className="text-[#11BAB2] text-4xl mb-2" />,
    desc: "Complete e-commerce solutions from store setup to management.",
  },
];

const Services = () => (
  <section className="w-full py-20 px-8 bg-white" id="services">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-black">
        <span className="text-[#11BAB2]">Our</span> Services
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        We offer a wide range of technology and business solutions to help your company grow and succeed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#11BAB2] bg-opacity-10 border-2 border-[#11BAB2] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;