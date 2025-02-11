// Add the "use client" directive to enable client-side rendering
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

// Define the type for the API response
type EmailResponse = {
  success?: string;
  error?: string;
};

const ContactPage = () => {
  // State variables for form data, status, and loading state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Validate form fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ error: "All fields are required!" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: EmailResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({ success: "Your message has been sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus({ error: error.message });
      } else {
        setStatus({ error: "An unexpected error occurred." });
      }
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
          className="w-full p-3 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md transition font-semibold ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {/* Display success or error messages */}
      {status?.success && (
        <p className="text-green-400 mt-4" aria-live="polite">
          {status.success}
        </p>
      )}
      {status?.error && (
        <p className="text-red-400 mt-4" aria-live="polite">
          {status.error}
        </p>
      )}
    </motion.section>
  );
};

export default ContactPage;