import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-black p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-extrabold">Event Aura</h3>
          <p className="text-base font-medium">Create and Manage Your Own Events</p>
        </div>

        <div className="flex gap-5 text-white mb-4 md:mb-0">
          <FaFacebookSquare size={25} />
          <BsInstagram size={25} />
          <BsWhatsapp size={25} />
        </div>
      </div>
      <p className="text-center text-white">© 2023 Event Aura. All rights reserved.</p>
    </div>
  );
};

export default Footer;
