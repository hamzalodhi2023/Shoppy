import React from "react";
import women_collection from "../../assets/women-collection.png";
import men_collection from "../../assets/men-collection.png";
import { Link } from "react-router-dom";

function GenderCollectionSection() {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row">
        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={women_collection}
            alt="Women's Collection"
            className="h-[700px] w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={men_collection}
            alt="Men's Collection"
            className="h-[700px] w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollectionSection;
