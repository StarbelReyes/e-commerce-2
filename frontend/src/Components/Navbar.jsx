import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='relative py-5 px-4 bg-white w-full'>
            {/* Search and Profile Icons (Top Right) */}
            <div className='absolute top-5 right-5 flex items-center gap-4'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />

                {/* Profile Icon with Dropdown */}
                <div className='relative group'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' />
                    <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Icon with Item Count */}
            <Link to='/cart' className='absolute top-5 right-28 flex items-center'>
                <div className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        10
                    </p>
                </div>
            </Link>

            {/* Menu Icon for Mobile */}
            <img onClick={() => setVisible(!visible)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='Menu' />

            {/* Mobile Menu Content */}
            <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} sm:hidden`}>
                <div className='flex flex-col text-gray-600'>
                     <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Back' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b cursor-pointer' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b cursor-pointer' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b cursor-pointer' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b cursor-pointer' to='/contact'>CONTACT</NavLink>
                </div>
            </div>




            {/* Logo and Navigation (Centered) */}
            <div className='flex flex-col items-center justify-center'>
                {/* Logo */}
               <Link to='/' ><img src={assets.logo} className='w-36 mb-5' alt="Logo" /></Link> 

                {/* Navigation Links */}
                <div className='hidden sm:flex'>
                    <ul className='flex gap-8 text-sm text-gray-700'>
                        <li>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                            >
                                <p className='text-sm'>HOME</p>
                                <hr className='w-2/4 border-none h-[1px] bg-yellow-400' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/collection' 
                                className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                            >
                                <p className='text-sm'>COLLECTION</p>
                                <hr className='w-2/4 border-none h-[1px] bg-yellow-400' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/about' 
                                className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                            >
                                <p className='text-sm'>ABOUT</p>
                                <hr className='w-2/4 border-none h-[1px] bg-yellow-400' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/contact' 
                                className={({ isActive }) => `flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'bg-gray-200 text-black' : 'bg-gray-100 text-gray-600'} hover:bg-yellow-300 hover:text-black`}
                            >
                                <p className='text-sm'>CONTACT</p>
                                <hr className='w-2/4 border-none h-[1px] bg-yellow-400' />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
