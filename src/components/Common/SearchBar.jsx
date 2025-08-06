import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setSearchTerm("");
  };
  return (
    <div
      className={`flex w-full items-center justify-center transition-all duration-100 ${isOpen ? "absolute top-0 left-0 z-50 h-24 bg-white" : "w-auto"}`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-gray-100 py-2 pr-12 pl-2 placeholder:text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          {/* close Button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
