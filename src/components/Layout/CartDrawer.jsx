import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartComponents from '../Cart/CartComponents'
import { useNavigate } from 'react-router-dom'

function CartDrawer({ toggleCartDrawer, drawerOpen }) {
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/checkout");
    }

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* close Button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer} >
                    <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer' />
                </button>
            </div>
            {/* Cart contents with scrollable area */}
            <div className='flex-grow overflow-y-auto p-4'>
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                {/* Component for Cart Contents */}
                <CartComponents />
            </div >

            {/* Checkout button fixed at the bottom */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button onClick={handleCheckout} className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 cursor-pointer transition'>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping, texes, and discount codes calculated at checkout.</p>
            </div>
        </div>
    )
}

export default CartDrawer