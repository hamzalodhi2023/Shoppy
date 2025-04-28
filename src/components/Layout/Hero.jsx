import React from 'react'
import heroImg from "../../assets/shoppy-hero.jpg"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="relative">
            <img src={heroImg} alt="Shoppy" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
            <div className='absolute inset-0 bg-[#00000060] flex items-center justify-center'>
                <div className='text-center text-white p-6'>
                    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
                        vacation <br />
                        Ready
                    </h1>
                    <p className='text-sm tracking-widest md:text-lg mb-6'>
                        Shop like a king, save like a boss — only here, full on!
                    </p>
                    <Link to="" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-steel-blue hover:text-white transition-all'>
                        Shop Now!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero 