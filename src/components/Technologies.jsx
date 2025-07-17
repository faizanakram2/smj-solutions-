import React from "react";
import { FaReact, FaNodeJs, FaMobileAlt, FaDatabase, FaCloud, FaPaintBrush } from "react-icons/fa";

const techData = [
    {
        title: "Frontend",
        icon: <FaReact className="text-[#11BAB2] text-4xl" />,
        items: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: <FaNodeJs className="text-[#11BAB2] text-4xl" />,
        items: ["Node.js", "Express", "Django", "Flask", "Laravel", "Spring Boot"],
    },
    {
        title: "Mobile App",
        icon: <FaMobileAlt className="text-[#11BAB2] text-4xl" />,
        items: ["React Native", "Flutter", "Swift", "Kotlin", "Java"],
    },
    {
        title: "Databases",
        icon: <FaDatabase className="text-[#11BAB2] text-4xl" />,
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite"],
    },
    {
        title: "DevOps",
        icon: <FaCloud className="text-[#11BAB2] text-4xl" />,
        items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
        title: "Branding / UI-UX",
        icon: <FaPaintBrush className="text-[#11BAB2] text-4xl" />,
        items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
];

const Technologies = () => (
    <section className="w-full py-20 px-8 bg-white" id="technologies">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-black">
                <span className="text-[#11BAB2]">Our</span> Technologies
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                We use the latest and most reliable technologies to deliver robust, scalable, and innovative solutions for our clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {techData.map((tech) => (
                    <div
                        key={tech.title}
                        className="bg-[#11BAB2] bg-opacity-10 border-2 border-[#11BAB2] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <div className="mb-4">{tech.icon}</div>
                        <h3 className="text-xl font-bold text-black mb-3">{tech.title}</h3>
                        <ul className="text-gray-700 text-center space-y-1">
                            {tech.items.map((item) => (
                                <li key={item} className="inline-block mx-2 my-1 px-3 py-1 bg-white rounded-full border border-[#11BAB2] text-sm font-medium text-black shadow-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Technologies;
