import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 px-4 bg-white'>
            <img src={assets.logo} className='w-36' alt="Logo" />

            <div className='flex flex-grow justify-center'>
                <ul className='flex gap-8 text-sm text-gray-700'>
                    <li>
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                        >
                            <p className='text-lg'>HOME</p>
                            <hr className='w-2/4 border-none h-[2px] bg-yellow-400' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/collection' 
                            className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                        >
                            <p className='text-lg'>COLLECTION</p>
                            <hr className='w-2/4 border-none h-[2px] bg-yellow-400' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/about' 
                            className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                        >
                            <p className='text-lg'>ABOUT</p>
                            <hr className='w-2/4 border-none h-[2px] bg-yellow-400' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/contact' 
                            className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                        >
                            <p className='text-lg'>CONTACT</p>
                            <hr className='w-2/4 border-none h-[2px] bg-yellow-400' />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
