"use client";

import { useState } from "react";

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
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
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess("Your request has been sent successfully!");
        setFormData({ name: "", company: "", role: "", message: "" });
      } else {
        setSuccess("Failed to send your request.");
      }
    } catch (error) {
      setSuccess("Error sending request.");
    }

    setLoading(false);
  };

  return (
    <div id="hireme" className="flex justify-center items-center min-h-screen p-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Hire Me</h2>

        <input 
          type="text" 
          name="name" 
          placeholder="Your Name (Employer/Client)" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full dark:bg-white dark:text-gray-800 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />

        <input 
          type="text" 
          name="company" 
          placeholder="Company/Organization (Optional)" 
          value={formData.company} 
          onChange={handleChange} 
          className="w-full dark:bg-white dark:text-gray-800 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />

        <input 
          type="text" 
          name="role" 
          placeholder="Role You’re Hiring For" 
          value={formData.role} 
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
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {success && <p className="text-center text-green-500 font-medium">{success}</p>}
      </form>
    </div>
  );
}
