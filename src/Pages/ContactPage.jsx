import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <motion.h1
        className="text-4xl font-bold text-sky-900 text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Whether you have a question, feedback, or just want to say hello — we’d love to hear from you. Fill out the form below or connect with us on social media.
      </p>

      {/* Contact Form */}
      <motion.form
        className="bg-white shadow-md rounded-2xl p-8 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-900"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-900 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-sky-900 text-white font-medium px-6 py-2 rounded-xl hover:bg-sky-900/80 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Icons */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Or connect with us</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/rafi.shariar.630040/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-400 text-2xl transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/rafi-shariar-231449214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-600 text-2xl transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Rafi-Shariar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rafi.shariar619@gmail.com"
            className="text-gray-600 hover:text-red-600 text-2xl transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
