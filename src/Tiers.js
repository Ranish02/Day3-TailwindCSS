import React from 'react';

const Tiers = () => {
    return (
        <div className='bg-white text-black w-full py-40 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-75'>
                    <img src="" alt="" />
                    <h2 className='text-2xl font-bol text-center py-8 font-bold'>Single User</h2>
                    <p className='text-2xl font-bold text-center py-8'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 gb storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#710082] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-75 bg-gray-200'>
                    <img src="" alt="" />
                    <h2 className='text-2xl font-bol text-center py-8 font-bold'>Single User</h2>
                    <p className='text-2xl font-bold text-center py-8'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 gb storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#710082]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 md:my-8 my-0  rounded-lg hover:scale-105 duration-75'>
                    <img src="" alt="" />
                    <h2 className='text-2xl font-bol text-center py-8 font-bold'>Single User</h2>
                    <p className='text-2xl font-bold text-center py-8'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 gb storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#710082] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
                </div>
            </div>
        </div>
    );
}

export default Tiers;
