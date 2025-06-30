import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="RateWise Logo" className="w-12" />
            <Link to="/" className="text-2xl lg:text-3xl font-semibold text-secondary">
              Rate<span className="font-extralight text-yellow-500">Wise</span>
            </Link>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            RateWise is a modern, user-driven service review platform that allows people to discover services, read real user reviews, and contribute their own experiences. 
          </p>
          <p className="text-sm text-gray-400 mt-5">&copy; {new Date().getFullYear()} RateWise. All rights reserved.</p>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">About Us</a></li>
            <li><a className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Legal</h6>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Terms of Use</a></li>
            <li><a className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">Privacy Policy</a></li>
          </ul>
        </div>
      </div>



    </footer>
  );
};

export default Footer;
