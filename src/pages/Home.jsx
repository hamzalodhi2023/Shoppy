import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'

function Home() {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />
        </div>
    )
}

export default Home