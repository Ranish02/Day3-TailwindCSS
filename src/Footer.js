import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='h-full bg-black text-white'>
            <div className='mx-8 py-6 pb-10'>
                <div className='mx-auto grid lg:grid-cols-3 p-10 gap-3'>
                    <div>
                        <h2 className='font-bold text-3xl py-3 text-[#710082] w-full'>ReactJs.</h2>
                        <p py-6>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veniam accusamus molestiae ad explicabo amet consectetur tenetur dolores cupiditate, fuga non architecto eos eum ea, consequuntur animi! Repellat, eligendi tempore.</p>
                        <div className='flex my-6 justify-between md:w-[75%]'><FaDribbbleSquare size={20} />
                            <FaFacebookSquare size={20} />
                            <FaGithubSquare size={20} />
                            <FaInstagram size={20} />
                            <FaTwitterSquare size={20} />
                        </div>

                    </div>
                    <div className="lg:col-span-2 pr-10 mx-5 grid lg:grid-cols-3 sm:my-10 justify-center md:justify-between">
                        <div className='mt-10 lg:mt-0'>
                            <p className='pb-3 text-gray-100 font-medium '>Solutions</p>
                            <ul>
                                <li className='py-2text-sm'>Analytics</li>
                                <li className='py-2 text-sm'>Marketing</li>
                                <li className='py-2 text-sm'>Commerce</li>
                                <li className='py-2 text-sm'>Insights</li>
                            </ul>
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <p className='font-medium pb-3 text-gray-100'>Support</p>
                            <ul>
                                <li className='py-2text-sm'>Pricing</li>
                                <li className='py-2 text-sm'>Documentation</li>
                                <li className='py-2 text-sm'>Guides</li>
                                <li className='py-2 text-sm'>Api Status</li>
                            </ul>
                        </div>
                        <div className='mt-10 lg:mt-0 font-medium '>
                            <p className='pb-3 text-gray-100'>Company</p>
                            <ul>
                                <li className='py-2 text-sm'>Blog</li>
                                <li className='py-2 text-sm'>Jobs</li>
                                <li className='py-2 text-sm'>Press</li>
                                <li className='py-2 text-sm'>Api Status</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
