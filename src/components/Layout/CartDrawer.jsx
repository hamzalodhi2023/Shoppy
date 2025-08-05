import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartComponents from "../Cart/CartComponents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CartDrawer({ toggleCartDrawer, drawerOpen }) {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.auth);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 flex h-full w-3/4 transform flex-col bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-[30rem] ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 cursor-pointer text-gray-600" />
        </button>
      </div>
      {/* Cart contents with scrollable area */}
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>
        {/* Component for Cart Contents */}
        <CartComponents />
      </div>

      {/* Checkout button fixed at the bottom */}
      <div className="sticky bottom-0 bg-white p-4">
        <button
          onClick={handleCheckout}
          className="w-full cursor-pointer rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Checkout
        </button>
        <p className="mt-2 text-center text-sm tracking-tighter text-gray-500">
          Shipping, texes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
}

export default CartDrawer;
