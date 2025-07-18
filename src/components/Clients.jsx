import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import carGuru from "../Assets/800_carguru.png";
import cybase from "../Assets/cybase.jpg";
import drivon from "../Assets/drivon.png";
import gotstuck from "../Assets/got stuck.jpeg";

const clients = [
  {
    name: "800 CAR GURU",
    location: "United Arab Emirates",
    website: "https://800carguru.ae",
    contact: "+971-123-4567",
    logo: carGuru,
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
];

const Clients = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#021c2a] to-[#032b45] py-24 px-6 md:px-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
          Trusted <span className="text-[#11BAB2]">Clients</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in delay-100">
          Innovators, entrepreneurs, and enterprises who trust us to build their digital future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 object-contain mb-4 rounded-md shadow-md border border-white/20"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#11BAB2]">{client.name}</h3>
            <div className="flex items-center justify-center text-sm text-gray-200 mb-1">
              <FaMapMarkerAlt className="mr-2 text-[#11BAB2]" />
              <span className="uppercase tracking-wide font-medium">{client.location}</span>
            </div>
            <div className="flex items-center justify-center text-sm mb-1">
              <FaGlobe className="mr-2 text-[#11BAB2]" />
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#11BAB2] hover:underline"
              >
                Visit Website
              </a>
            </div>
            <div className="flex items-center justify-center text-sm">
              <FaPhoneAlt className="mr-2 text-[#11BAB2]" />
              <span>{client.contact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
