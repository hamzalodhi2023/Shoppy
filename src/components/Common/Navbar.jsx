import React, { useState } from 'react'
import { HiOutlineShoppingBag, HiOutlineUsers } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'


function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    return (
        <>
            <nav className='container mx-auto flex justify-between py-4 px-6'>
                {/* left - logo */}
                <div>
                    <Link to='/' className='text-2xl font-medium'>
                        Shoppy
                    </Link>
                </div>
                {/* center - Navigation Links */}
                <div className='hidden md:flex space-x-6'>
                    <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                    <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                    <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                    <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
                </div>
                {/* Right - Icons */}
                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUsers className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 ' />
                        <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>
                    {/* Search */}
                    <div className='overflow-hidden'></div>
                    <SearchBar />
                    <button className='md:hidden'>
                        <HiBars3BottomRight />
                    </button>
                </div>
            </nav>
            {/* Cart Drawer */}
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    )
}

export default Navbar