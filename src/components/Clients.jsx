import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import carGuru from "../Assets/800_carguru.png";
import catchTaxi from "../Assets/catch driver.jpeg";
import cybase from "../Assets/cybase.jpg";
import drivon from "../Assets/drivon.png";
import gotstuck from "../Assets/got stuck.jpeg";
import mozakrah from "../Assets/mozakrah.jpg";

const clients = [
  {
    name: "800 CAR GURU",
    location: "United Arab Emirates",
    website: "https://800carguru.ae",
    contact: "+971-123-4567",
    logo: carGuru,
  },
  {
    name: "CATCH TAXI",
    location: "Kenya and Ethiopia",
    website: "https://catchtaxi.com",
    contact: "+254-700-000000",
    logo: catchTaxi,
  },
  {
    name: "CYBASE",
    location: "Bahrain and Qatar",
    website: "https://cybase.io",
    contact: "+973-6000-0000",
    logo: cybase,
  },
  {
    name: "DRIVON",
    location: "London, UK",
    website: "https://drivon.co.uk",
    contact: "+44-20-1234-5678",
    logo: drivon,
  },
  {
    name: "GOTSTUCK",
    location: "London, UK",
    website: "https://gotstuck.co.uk",
    contact: "+44-20-9876-5432",
    logo: gotstuck,
  },
  {
    name: "MOZAKRAH",
    location: "Delaware, USA",
    website: "https://mozakrah.org",
    contact: "+1-302-123-4567",
    logo: mozakrah,
  },
];

const Clients = () => {
  return (
    <section className="w-full bg-[#032b45] py-20 px-6 md:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
        Our <span className="text-[#11BAB2]" >Clients</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in delay-100">
          Trusted by global innovators, entrepreneurs, and enterprises across industries and countries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white text-[#032b45] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-14 object-contain mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{client.name}</h3>
            <div className="flex items-center justify-center text-sm text-[#11BAB2] mb-1">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-medium uppercase tracking-wide">{client.location}</span>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
              <FaGlobe className="mr-2" />
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#11BAB2] hover:underline"
              >
                Visit Website
              </a>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <FaPhoneAlt className="mr-2" />
              <span>{client.contact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

// Add this to your global CSS or Tailwind config
// Example TailwindCSS animations (add in tailwind.config.js)
// theme: {
//   extend: {
//     keyframes: {
//       'fade-in': {
//         '0%': { opacity: '0' },
//         '100%': { opacity: '1' },
//       },
//       'fade-in-up': {
//         '0%': { opacity: '0', transform: 'translateY(20px)' },
//         '100%': { opacity: '1', transform: 'translateY(0)' },
//       },
//     },
//     animation: {
//       'fade-in': 'fade-in 0.8s ease-out',
//       'fade-in-up': 'fade-in-up 0.8s ease-out',
//     },
//   },
// },
