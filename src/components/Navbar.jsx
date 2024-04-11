import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            return 'dark';
        } else {
            return 'light';
        }
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('color-theme', newTheme);
    };

    const toggleMobileMenu = () => {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.toggle('hidden');
    };

    const closeMobileMenu = () => {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.add('hidden');
    };

    return (
        <>
            <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
                <div className='flex flex-row gap-10'>
                    <Link to="/" className="text-2xl font-bold text-pink-600 dark:text-white ">
                        <span className='font-bold italic font-weight:500'>dribble</span>
                    </Link>

                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-pink-600 dark:text-gray-100 p-1" onClick={toggleMobileMenu}>
                            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Hamburger menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                     
                    <ul className='hidden lg:flex flex-row  gap-6 ml-0  text-gray-400 font-bold m-[0px] text-sm mt-1'>
                    <li className='hover:text-black hover:cursor'><Link to="/profile">Profile</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/register">Register</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/avatar">Avatar</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/">Home</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/hire-designers">Hire Designers</Link></li>
                    </ul>
                </div>

                <div className='flex flex-row gap-3'>
                    <div className="hidden lg:flex items-center">
                        <div className="relative mx-auto text-gray-600">
                            <input className="border border-gray-300 placeholder-current h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200" type="search" name="search" placeholder="Search"/>

                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                                    <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837.403-.376.439-1.278.291-2.471z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='hidden lg:flex '>
                        <button className="hidden lg:inline-block lg:ml-4 py-1.5 px-3 m-1 text-center bg-pink-600 text-white rounded-md hover:bg-pink-700 text-[13px] font-bold" onClick={() => {}}>
                            Sign Up
                        </button>
                    </div>

                    <div className="hidden lg:flex">
                        <button id="theme-toggle" type="button" className="hidden lg:inline-block lg:ml-auto py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleTheme}>
                            <svg id="theme-toggle-dark-icon" className={theme === 'light' ? 'w-5 h-6' : 'w-5 h-6 hidden'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" className={theme === 'dark' ? 'w-5 h-6' : 'w-5 h-6 hidden'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                            
                        </button>

                        {/* Rest of your JSX for desktop view */}
                    </div>
                </div>
            </nav>

            {/* Mobile navbar */}
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" onClick={closeMobileMenu}></div>
                <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link to="/" className="mr-auto text-2xl font-bold text-black text-pink-600 dark:text-gray-100">
                            dribble
                        </Link>
                        <button className="navbar-close" onClick={closeMobileMenu}>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className='flex flex-col gap-4'>
                        <li className='hover:text-black hover:cursor'><Link to="/profile">Profile</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/register">Register</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/avatar">Avatar</Link></li>
                        <li className='hover:text-black hover:cursor'><Link to="/">Home</Link></li>
                    </ul>
                    <button className="mt-8 py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700" onClick={() => {}}>
                        Sign Up
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Navbar;

