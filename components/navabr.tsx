import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navabr = () => {
    return (
        <header className="w-full mx-auto hidden py-4 sticky top-0 z-40 lg:flex bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <nav className="w-10/12 flex justify-between items-center gap-10 mx-auto">
                <div className="w-3/12 flex justify-start items-center ">
                    <Link href="/">
                        <img src='/logo.svg' height={1000} width={1000} alt='logo' className='w-10/12' />
                    </Link>
                </div>
                <div className="w-9/12 h-auto mx-auto flex justify-end">
                    <ul className="flex justify-end items-center rounded-full  bg-gray-900  outline-2 bg-opacity-50 outline-gray-500 backdrop-blur-md">
                        <Link href="/"><li className="py-4 px-8">Home</li></Link>
                        <Link href="/about"><li className="py-4 px-8">About</li></Link>
                        <Link href="/courses"><li className="py-4 px-8">Courses</li></Link>
                        {/* <Link href="/services"><li className="py-4 px-8">Team</li></Link>
                        <Link href="/contact"><li className="py-4 px-8">Contact</li></Link> */}
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Navabr