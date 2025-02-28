'use client';

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Api Integration", level: 70 },
  { name: "Graphic Design", level: 80 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-8">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-300 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  <motion.circle
                    className="text-blue-600 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 }}
                    transition={{ duration: 1.5 }}
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="16"
                    className="fill-blue-600 font-bold"
                  >
                    {skill.level}%
                  </text>
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-400 mt-4">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}