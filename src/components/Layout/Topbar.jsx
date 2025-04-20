import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

function Topbar() {
    return (
        <div className='"bg-[#ea2e0e] text-white '>
            <div className='container mx-auto'>
                <div>
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className='h-5 w-5' />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-5 w-5' />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-5 w-5' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar