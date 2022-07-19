import React from 'react';
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>The one and only Ranish</h1>
                <div className='flex items-center justify-center '>
                    <p className='md:text-5xl sm:text-4xl text-xl letter-spacing:3px'>Popular among teens as </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl letter-spacing:3px md:pl-4 pl-2 text-[#710082]'
                        strings={['Ranish', 'Ipro', 'Nephoos', 'IproFortnut', 'Nwyfo']} typeSpeed={60} backSpeed={80} loop />
                </div>
                <p
                    className='md:text-2xl text-lg  font-thin text-gray-500 md:pt-5 pt-3 p-8'
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptat yujo.</p>
                <button className='bg-[#00df9a] w-[100px] rounded-md mx-auto text-sm p-2 '>Know me</button>
            </div>

        </div >
    );
}

export default Hero;
