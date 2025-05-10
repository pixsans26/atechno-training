import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navabr = () => {
    return (
        <header className="w-full mx-auto hidden py-4 sticky top-0 z-50 lg:flex bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <nav className="w-10/12 flex justify-between items-center gap-10 mx-auto">
                <div className="w-3/12 flex justify-start items-center ">
                    <img src='/logo.svg' height={1000} width={1000} alt='logo' className='w-8/12' />
                </div>
                <div className="w-6/12 bg-gray-900 h-auto rounded-full outline-2 bg-opacity-50 outline-gray-500 backdrop-blur-md mx-auto">
                    <ul className="flex justify-between items-center ">
                        <Link href="/"><li className="py-4 px-8">Home</li></Link>
                        <Link href="/about"><li className="py-4 px-8">About</li></Link>
                        <Link href="/courses"><li className="py-4 px-8">Courses</li></Link>
                        {/* <Link href="/services"><li className="py-4 px-8">Team</li></Link>
                        <Link href="/contact"><li className="py-4 px-8">Contact</li></Link> */}
                    </ul>
                </div>
                <div className="w-3/12 flex justify-end">
                    <div>
                        {/* <Link className='relative w-full flex justify-center items-center' href="/contact">
                            <span className='absolute'>Company Website</span>
                            <img src='/images/button.svg' height={1000} width={100} alt='button' />
                        </Link> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navabr