import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-blue-200'>            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center'>
                <div className='text-black text-center sm:text-left'>
                    <div className='flex items-center justify-center sm:justify-start gap-4 mb-4'>
                        <p className='w-1 h-5 bg-blue-400'></p>
                        <p className='font-medium text-lg'>BESTSELLERS</p>
                    </div>
                    <h1 className='athiti-regular text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4'>
                        Latest Arrivals
                    </h1>
                    <div className='flex items-center justify-center sm:justify-start gap-4'>
                        <a href='#' className='bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors'>
                            SHOP NOW
                        </a>
                        <p className='w-40 h-1 bg-blue-400'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side with Image */}
            <div className='w-full sm:w-1/2 flex items-center justify-center'>
                <img className='w-full h-auto max-w-md object-cover' src={assets.hero_img} alt='Hero' />
            </div>
        </div>
    );
}

export default Hero;

