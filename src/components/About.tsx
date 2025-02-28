import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiFigma, SiAdobeillustrator } from "react-icons/si";

const About = () => {
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center  mb-8">About Me</h2>

                <p className="text-center max-w-2xl mx-auto mb-6">
                    I'm <span className="font-semibold ">Yousuf</span>, a 16-year-old passionate web developer and first-year Computer Science student.
                    I specialize in modern, scalable, and user-friendly web applications, with a strong focus on Next.js, React, and Tailwind CSS.
                    I constantly explore new advancements in web development to improve performance, accessibility, and user experience.
                </p>

                <p className="text-center max-w-2xl mx-auto mb-6">
                    Besides web development, I have a strong background in graphic design, specializing in logo design and branding. My design skills allow me to create visually appealing, intuitive, and aesthetically pleasing web interfaces.
                    I strive to merge functionality with creativity to craft high-quality digital experiences.
                </p>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold  mb-4">Hobbies & Interests</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-white">
                        <li className="flex items-center space-x-2">
                            <span>🎮 Gaming (open world, strategy games)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>🎨 Graphic Design (Logos, Branding, UI/UX)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>💻 Learning New Technologies</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>📚 Reading Books</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>🛠️ Experimenting with New Web Tools</span>
                        </li>
                    </ul>
                </div>

                <div className="max-w-4xl mx-auto mt-8">
                    <h3 className="text-2xl font-semibold  mb-4">Goals</h3>
                    <p >
                        My main goal is to become a full-stack developer and build innovative web solutions that enhance user experiences.
                        I aim to work with modern JavaScript library & frameworks like React.js & Next.js, contribute to open-source projects, and expand my knowledge in backend technologies like Node.js & databases.
                        I also plan to improve my design skills to create visually appealing and functional digital products.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Tools & Technologies I Use</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-white">
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiNextdotjs size={24} /> <span>Next.js</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiReact size={24} className="text-blue-500" /> <span>React.js</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiTypescript size={24} className="text-blue-600" /> <span>TypeScript</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiTailwindcss size={24} className="text-cyan-500" /> <span>Tailwind CSS</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiJavascript size={24} className="text-yellow-700" /> <span>JavaScript</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiFigma size={24} className="text-pink-500" /> <span>Figma</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 rounded-md">
                            <SiAdobeillustrator size={24} className="text-red-800" /> <span>Adobe Illustrator</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-12">
                    <h3 className="text-2xl font-semibold  mb-6">Education</h3>
                    <div className="relative border-l-4 border-blue-800">

                        <div className="mb-8 ml-6">
                            <div className="absolute -left-3 w-6 h-6 bg-blue-800 rounded-full"></div>
                            <h4 className="text-lg font-semibold">Jinnah Government Boys College</h4>
                            <p className="text-gray-600 dark:text-gray-400">H.S.C (2024 - Present)</p>
                        </div>

                        <div className="mb-8 ml-6">
                            <div className="absolute -left-3 w-6 h-6 bg-blue-800 rounded-full"></div>
                            <h4 className="text-lg font-semibold">G.I.A.I.C</h4>
                            <p className="text-gray-600 dark:text-gray-400">AI, Metaverse, and Web 3.0 (2024 - Present)</p>
                        </div>

                        <div className="mb-8 ml-6">
                            <div className="absolute -left-3 w-6 h-6 bg-blue-800 rounded-full"></div>
                            <h4 className="text-lg font-semibold ">Arshi Public School</h4>
                            <p className="text-gray-600 dark:text-gray-400">Secondary Education (2018 - 2024)</p>
                        </div>

                        <div className="mb-8 ml-6">
                            <div className="absolute -left-3 w-6 h-6 bg-blue-800 rounded-full"></div>
                            <h4 className="text-lg font-semibold ">Bright Career School</h4>
                            <p className="text-gray-600 dark:text-gray-400">Primary Education (Until 2018)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
