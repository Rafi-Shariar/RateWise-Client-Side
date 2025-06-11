import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
 <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 bg-primary">
  <aside className="grid-flow-col items-center">
    <div>
      <img src={logo} alt="" className='w-10'/>
    </div>
    <p className='text-gray-700'>Copyright © {new Date().getFullYear()} - All right reserved By RateWise</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href='https://www.facebook.com/rafi.shariar.630040/' target='_blank'>
      <FaFacebook className='text-3xl text-sky-600'/>
    </a>
    <a href='https://x.com/' target='_blank'>
      <FaTwitter className='text-3xl text-sky-300'/>
    </a>
    <a href='https://www.linkedin.com/in/rafi-shariar-231449214/' target='_blank'>
      <FaLinkedin className='text-3xl text-sky-800'/>

    </a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;