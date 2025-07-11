import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 lg:px-0">
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Newsletter</h3>
          <p className="mb-4 text-gray-500">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="mb-6 text-sm font-medium text-gray-600">
            Sign up and get 10% off your first order.
          </p>
          {/* Newsletter form */}
          <form className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-l-md border-t border-b border-l border-gray-300 p-3 text-sm transition-all focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-r-md bg-black px-6 py-3 text-sm text-white transition-all hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-colors hover:text-gray-500">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Follow Us</h3>
          <div className="mb-6 flex items-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="mr-2 inline-block" />
            0123-456-789
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 border-t border-gray-200 px-4 pt-6 lg:px-0">
        <p className="text-center text-sm tracking-tighter text-gray-500">
          © 2025, compileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
