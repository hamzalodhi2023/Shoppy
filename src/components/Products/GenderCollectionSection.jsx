import React from 'react'
import women_collection from "../../assets/women-collection.png"
import men_collection from "../../assets/men-collection.png"
import { Link } from 'react-router-dom'

function GenderCollectionSection() {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* Women Collection */}
                <div className="relative flex-1">
                    <img src={women_collection} alt="Women's Collection" className='w-full h-[700px] object-cover' />
                    <div className="absolute bottom-8 left-8 bg-white p-4">
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women's Collection
                        </h2>
                        <Link to="/collections/all?gender=Women" className='text-gray-900 underline'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                {/* Men Collection */}
                <div className="relative flex-1">
                    <img src={men_collection} alt="Men's Collection" className='w-full h-[700px] object-cover' />
                    <div className="absolute bottom-8 left-8 bg-white p-4">
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men's Collection
                        </h2>
                        <Link to="/collections/all?gender=Men" className='text-gray-900 underline'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection