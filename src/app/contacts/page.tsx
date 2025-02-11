"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required!");
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to send message");

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-white bg-gray-900 p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md transition ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success / Error Messages */}
      {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-400 mt-4">{errorMessage}</p>}
    </motion.section>
  );
};

export default ContactPage;
