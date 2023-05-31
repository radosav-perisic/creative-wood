import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-28 flex items-center justify-center bg-[#191717] px-6 text-white">
      
      <div className="flex space-x-10 items-center">
      <p className="text-[13px] text-gray-300/50 ml-auto">
      © 2023 Creative Wood. All Rights Reserved.
      </p>

      <div className='space-x-3 flex'>
        <a href="#" className="text-2xl hover:scale-125 duration-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-2xl hover:scale-125 duration-300">
          <FaFacebook />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
