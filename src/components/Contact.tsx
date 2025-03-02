"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send email.");
      }
    } catch (error) {
      setSuccess("Error sending email.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center min-h-screen p-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full dark:bg-white dark:text-gray-800 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full dark:bg-white dark:text-gray-800 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />

        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          className="w-full dark:bg-white dark:text-gray-800 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none" 
        ></textarea>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-center text-green-500 font-medium">{success}</p>}
      </form>

      <div className="flex space-x-4 mt-6">
        <a 
          href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/" 
          target="_blank" 
          className="text-blue-700 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300 text-2xl transition"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ShaikhYousuf39" 
          target="_blank" 
          className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 text-2xl transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
