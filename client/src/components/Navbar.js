import React, { useState } from 'react';
import logo from './../assets/Economics Conclave.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'Team', path: '/team' },
        { id: 3, text: 'Contact', path: '/contact' },
    ];

    const closeMobileMenu = () => {
        setNav(false);
    };

    return (
        <>
            <div className='flex pt-3 justify-between items-center h-16 max-[1300px]:ml-6 min-[1400px]:my-2  max-w-[1240px] mx-auto px-4 text-white'>
                {/* Logo */}
                <img className='h-14' src={logo} alt="Logo" />

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <Link key={item.id} to={item.path}>
                            <li
                                className='p-4 font-sans hover:bg-[#f19f57] rounded-2xl text-xl m-2 cursor-pointer duration-300 hover:text-black'
                            >
                                {item.text}
                            </li>
                        </Link>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full z-10 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <img className='h-12 p-2 m-2 mt-4' src={logo} alt="Logo" />

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <Link key={item.id} to={item.path} onClick={closeMobileMenu}>
                            <li
                                className='p-4 border-b rounded-xl hover:bg-[#f19f57] duration-300 hover:text-black cursor-pointer border-gray-600'
                            >
                                {item.text}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center'>
                <div className="border-t border-slate-400 border-dotted my-4 w-11/12"></div>
            </div>
        </>
    );
};

export default Navbar;
