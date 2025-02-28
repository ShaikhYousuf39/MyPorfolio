"use client";
import { motion } from "framer-motion";
import { Cookie } from "next/font/google";
import Image from "next/image";
import Link from "next/link"

const cookieFont = Cookie({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        <motion.div
          className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/Pic.jpg"
            alt="Yousuf's Profile Picture"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>

        <motion.h1
          className={`text-6xl md:text-8xl font-extrabold tracking-wide ${cookieFont.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Yousuf
        </motion.h1>
        <motion.p
          className="mt-2 text-2xl font-semibold "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Web Developer
        </motion.p>
        <motion.p
          className="mt-4 text-lg md:text-xl  leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Passionate about crafting modern, responsive, and high-performance websites.
          I specialize in JavaScript, TypeScript, Next.js, and Tailwind CSS, building seamless
          user experiences with clean and optimized code. Let's create something amazing together!
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/cv.jpg" target="_blank" className="px-6 py-3 bg-[#64FFDA] text-black rounded-full font-semibold shadow-lg hover:bg-[#52e6c0] transition transform hover:scale-105">
            Download Resume
          </Link>
          <Link href="https://github.com/ShaikhYousuf39/" target="_blank" className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:bg-gray-900 hover:text-white transition transform hover:scale-105">
            View Github Profile
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
