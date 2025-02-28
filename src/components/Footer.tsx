import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-gray-800 dark:text-white py-6">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-xl font-semibold dark:text-white text-gray-900">Yousuf's Portfolio</h2>
                <p className="text-gray-600 dark:text-white mt-2">
                    Passionate about Graphic Design & Web Development
                </p>

                <div className="flex justify-center space-x-6 mt-4">
                    <Link href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/" target="_blank" className="hover:text-blue-600 transition text-2xl">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/ShaikhYousuf39/" target="_blank" className="hover:text-gray-700 transition text-2xl">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.instagram.com/just_.yousuf" target="_blank" className="hover:text-blue-400 transition text-2xl">
                        <FaInstagram />
                    </Link>
                    <Link href="mailto:yousufshaikh381@gmail.com" className="hover:text-red-500 transition text-2xl">
                        <FaEnvelope />
                    </Link>
                </div>

                <p className="text-gray-500 text-sm mt-4">
                    © {new Date().getFullYear()} Yousuf. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
