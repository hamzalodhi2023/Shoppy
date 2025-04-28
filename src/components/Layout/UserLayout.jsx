import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Main content */}
            <main>
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default UserLayout