import React from "react";
import { FaWrench, FaRocket, FaPuzzlePiece, FaThLarge } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#f1f7fa] py-20 px-6 md:px-20 text-[#032b45]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At SMJ, we bring unmatched expertise, innovative thinking, and dedication to every project. Here's why clients choose us as their technology partner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[{
          icon: <FaWrench className="text-4xl text-[#11BAB2] mb-4" />, 
          title: "Tailored Solutions", 
          desc: "Our software development expertise customizes solutions for businesses based on their specific needs."
        }, {
          icon: <FaRocket className="text-4xl text-[#11BAB2] mb-4" />, 
          title: "Cutting-Edge Services", 
          desc: "We offer a comprehensive range of services to help you leverage the full potential of digital technology."
        }, {
          icon: <FaPuzzlePiece className="text-4xl text-[#11BAB2] mb-4" />, 
          title: "Unique Approach", 
          desc: "Our solutions are highly adaptable to suit any business while enhancing their durability and reliability."
        }, {
          icon: <FaThLarge className="text-4xl text-[#11BAB2] mb-4" />, 
          title: "Customized Process", 
          desc: "Our objective is to offer personalized solutions that aid in the success of your business."
        }].map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              {card.icon}
              <h3 className="text-xl font-bold mb-2 mt-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
