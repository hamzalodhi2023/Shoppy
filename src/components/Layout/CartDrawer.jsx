import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

function CartDrawer({ toggleCartDrawer, drawerOpen }) {

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* close Button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer} >
                    <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer' />
                </button>
            </div>
        </div>
    )
}

export default CartDrawer