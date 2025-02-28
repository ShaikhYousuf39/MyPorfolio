'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Comforty - E-commerce Website",
    description: "An e-commerce platform focused on selling high-quality chairs.",
    link: "https://hackathon-3-beige.vercel.app/",
    image: "/comforty.png",
  },
  {
    title: "Resume Builder",
    description: "A dynamic resume maker with a fantastic and awesome style.",
    link: "https://college-project-lovat.vercel.app/",
    image: "/resume.png",
  },
  {
    title: "Dynamic Blog Website",
    description: "A dynamic blog website made using Nextjs and Tailwind CSS.",
    link: "https://dynamic-blogging-website-three.vercel.app/",
    image: "/blog.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl dark:bg-gray-800 shadow-lg overflow-hidden flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
