'use client'
import React, { useState } from 'react';

import Link from "next/link";
import { FaBarsStaggered } from 'react-icons/fa6';

const NavbarMobile = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className='lg:hidden w-full mx-auto py-2 h-16 sticky top-0 z-40 flex bg-gray-900 bg-opacity-50 backdrop-blur-sm'>
                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 h-full w-80 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                    <div className="w-full flex justify-end p-4 bg-gray-900 backdrop-blur-lg">

                        <button
                            className="lg:hidden text-gray-400 hover:text-white"
                            onClick={() => setSidebarOpen(false)}>
                            ✖
                        </button>
                    </div>
                    <nav className="space-y-4 bg-gray-900 backdrop-blur-sm h-screen">
                        <div className='w-11/12 flex justify-center items-center h-24'>
                            <Link onClick={() => setSidebarOpen(false)} href="/">
                                <img src='/logo.svg' />
                            </Link>
                        </div>
                        <Link
                            href="/"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            About
                        </Link>
                        <Link
                            href="/courses"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Courses
                        </Link>
                        {/* <Link
                            href="/services"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Team
                        </Link> */}
                        {/* <Link
                            href="/contact"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Contact
                        </Link> */}
                        {/* <Link className='relative px-4 py-2 w-full flex justify-center items-center'

                            onClick={() => setSidebarOpen(false)}
                            href="/contact">

                            <span className='absolute'>Enquiry</span>
                            <img src='/images/button.svg' height={1000} width={100} alt='button' />
                        </Link> */}
                    </nav>
                </div>
                <div className='w-11/12 flex justify-between items-center mx-auto'>
                    {/* Logo */}
                    <div className='w-2/12 py-2'>
                        <Link href="/">
                            <img height={1000} width={1000} src='/logomob.svg' alt='NavLogo' className='h-full w-9/12' />
                        </Link>
                    </div>

                    <div className='w-3/12 flex justify-end items-center'>
                        <FaBarsStaggered onClick={() => setSidebarOpen(true)} className="text-3xl text-white" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarMobile;
