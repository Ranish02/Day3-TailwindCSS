import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8' >Tailwinds</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Services</li>
                <li className='p-4'>Downloads</li>
                <button className='btn'>Login</button>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ?
                    <AiOutlineMenu size={25} /> :
                    <AiOutlineClose size={25} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]  ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8' >Tailwinds</h1>
                <ul className='uppercase p-4 '>
                    <li className='p-4 border-b border-gray-600 '>Home</li>
                    <li className='p-4 border-b border-gray-600 '>Company</li>
                    <li className='p-4 border-b border-gray-600 '>Services</li>
                    <li className='p-4 border-b border-gray-600 '>Downloads</li>
                    <li className='p-4 '>Login</li>

                </ul>
            </div>
        </div>
    )
}