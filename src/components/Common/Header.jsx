import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

function Header() {
    return (
        <header>
            {/* Topbar */}
            <Topbar />
            {/* Navbar */}
            <Navbar />
            {/* Cart Drawer */}
        </header>
    )
}

export default Header