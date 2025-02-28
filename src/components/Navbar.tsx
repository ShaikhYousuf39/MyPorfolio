"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ToggleButton from "@/components/ToggleButton"; // Import your toggle button component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Navbar Links */}
        <div className="hidden md:flex font-semibold space-x-6">
          {["About", "Projects", "Skills", "Contact", "HireMe"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle Button Component */}
        <ToggleButton />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white absolute right-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-6 space-y-4 text-center">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 after:block after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
