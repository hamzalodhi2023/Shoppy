import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUsers } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex justify-between px-6 py-4">
        {/* left - logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Shoppy
          </Link>
        </div>
        {/* center - Navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/collections/all?gender=Men"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block rounded bg-black px-2 text-sm text-white"
          >
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUsers className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative cursor-pointer hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="bg-steel-blue absolute -top-1 rounded-full px-2 py-0.5 text-xs text-white">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden"></div>
          <SearchBar />
          <button
            onClick={toggleNavDrawer}
            className="cursor-pointer md:hidden"
          >
            <HiBars3BottomRight />
          </button>
        </div>
      </nav>
      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`sm:w1/2 fixed top-0 left-0 z-50 h-full w-3/4 transform bg-white shadow-lg transition-transform duration-300 md:w-1/3 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 cursor-pointer text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              className="mb-2 block text-sm font-medium text-gray-700 uppercase hover:text-black"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              className="mb-2 block text-sm font-medium text-gray-700 uppercase hover:text-black"
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              className="mb-2 block text-sm font-medium text-gray-700 uppercase hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              className="mb-2 block text-sm font-medium text-gray-700 uppercase hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
