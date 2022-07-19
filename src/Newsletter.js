import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-black text-white p-12 '>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='text-3xl font-bold py-4'>Subscribe to my newsletter</h1>
                    <p className='text-xl font-thin '>Enter the email  sign up for interesting news and ideas</p>
                </div>
                <div>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='text-black lg:w-[600px] flex rounded-lg p-3 my-4 w-full' type="text" placeholder='Enter Email' />
                        <button className='bg-[#710082] w-[150px] text-white md:mx-5 font-medium my-4 rounded-md py-3 px-1 sm:mx-auto ' >Subscribe</button>
                    </div>
                    <p className='font-thin '>Lorem ipsum dolor sit amet consectetur, adipisicing <span className='text-[#710082]'><a href='#' >Learn more.</a></span></p>
                </div>
            </div>
        </div >
    );
}

export default Newsletter;
