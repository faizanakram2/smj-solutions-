import React from "react";

const Hero = () => {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center px-6 md:px-20 py-24 bg-gradient-to-br from-white via-[#f0fafa] to-white text-[#032b45] animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-widest text-[#11BAB2] mb-4 font-semibold animate-fade-in delay-100">
                    About Us
                </h3>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-200">
                    Empowering Innovation with <span className="text-[#11BAB2]">SMJ</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold mb-6 animate-fade-in-up delay-300 text-gray-800">
                    Strategic Media Journey Ltd
                </h2>

                <p className="text-md md:text-lg text-gray-700 mb-6 animate-fade-in delay-400">
                    We collaborate with forward-thinking partners across the globe to deliver technology solutions that exceed expectations. At SMJ, our mission is to build smart, scalable, and result-driven digital products.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8 animate-fade-in-up delay-500">
                    <div className="flex items-start transition-transform duration-300 hover:scale-[1.02]">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#11BAB2] mr-3"></div>
                        <p>SMART business objectives and project timelines.</p>
                    </div>
                    <div className="flex items-start transition-transform duration-300 hover:scale-[1.02]">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#11BAB2] mr-3"></div>
                        <p>Continuous feedback integration and agile delivery.</p>
                    </div>
                    <div className="flex items-start transition-transform duration-300 hover:scale-[1.02]">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#11BAB2] mr-3"></div>
                        <p>Skilled and experienced technology teams.</p>
                    </div>
                    <div className="flex items-start transition-transform duration-300 hover:scale-[1.02]">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#11BAB2] mr-3"></div>
                        <p>A strong, quality-first culture at every level.</p>
                    </div>
                </div>

                <a
                    href="#contact"
                    className="bg-[#11BAB2] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg 
                        hover:bg-white hover:text-[#11BAB2] border border-transparent hover:border-[#11BAB2] 
                        transition-all duration-300 animate-fade-in-up delay-600"
                >
                    Get a Free Consultation
                </a>
            </div>
        </section>
    );
};

export default Hero;
