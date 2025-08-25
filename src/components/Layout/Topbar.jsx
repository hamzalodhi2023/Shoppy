import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

function Topbar() {
  return (
    <div className="bg-steel-blue text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="hidden items-center space-x-4 md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="flex-grow text-center text-sm">
          <span>Shop like a king, save like a boss — only here, full on!</span>
        </div>
        <div className="hidden text-sm md:block">
          <a
            href="tel:+92 300 0000000
"
            className="hover:text-gray-300"
          >
            +92 300 0000000
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
