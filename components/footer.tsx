
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiEnvelope, BiMobile } from "react-icons/bi"
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { GrLocation } from "react-icons/gr"


const Footer = () => {
    return (
        <section className='bg-dark-theme bg-opacity-50 pt-10'>

            <div className="lg:w-10/12 w-11/12 mx-auto justify-between gap-40 lg:flex mb-10">
                <div className="lg:w-4/12 w-full lg:mb-0 mb-10">
                    <div className='mb-10'>
                        <img src='/logo.svg' width={1000} height={100} alt="logo" className='w-8/12' />
                    </div>
                    <div className='mb-10'>
                        <p className='text-small'>It has long been known that a reader&apos;s attention will be diverted from</p>
                    </div>
                    {/* <div className='lg:grid hidden grid-cols-3 w-full gap-20'>
                        <div className='relative flex justify-center items-center'>
                            <FaInstagram className='text-3xl' />
                            <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <FaLinkedin className='text-3xl' />
                            <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <FaTwitter className='text-3xl' />
                            <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                        </div>
                    </div> */}
                </div>
                <div className="lg:w-6/12 w-full grid grid-cols-2 mx-auto lg:gap-20 gap-10 lg:mb-0 mb-10">
                    <div className="w-full">
                        <h4 className="font-semibold uppercase mb-4 text-white">Navigation</h4>
                        <ul className="gap-2 flex flex-col text-gray-100 lg:text-sm text-xs">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/courses">Courses</Link></li>


                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="font-semibold uppercase mb-4 text-white">Quick Links</h4>
                        <ul className="gap-2 flex flex-col text-gray-100 lg:text-sm text-xs">
                            <li><Link href="/privacy_policy">Privacy Policy</Link></li>
                            <li><Link href="/terms&condition">Terms & Condition</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="lg:w-3/12 w-11/12 lg:mb-0 mb-16">
                    <h4 className="font-semibold uppercase mb-4 text-white">Contact</h4>
                    <ul className="gap-2 flex flex-col text-gray-100 lg:text-sm text-xs">
                        <li className="flex items-center gap-2"><span><BiEnvelope /></span><Link href="mailto:williamsoccer2013@gmail.com">atechno@gmail.com</Link></li>
                        <li className="flex items-center gap-2"><span><BiMobile /></span><Link href="tel:+919742575356">+91 9842394728</Link></li>
                        <li className="flex items-start gap-2"><span><GrLocation /></span><Link href="#">Ph-I, Bldg-A-9, Fl-103, SN-17, Shivsagar City Ph-I, Wadgaon BK, Pune-411041, Maharashtra, India</Link></li>
                    </ul>

                </div>
                {/* <div className='lg:w-3/12 w-8/12 grid lg:hidden grid-cols-3 lg:gap-20 gap-10 lg:mx-0 mx-auto'>
                    <div className='relative flex justify-center items-center'>
                        <FaInstagram className='lg:text-3xl text-2xl' />
                        <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <FaLinkedin className='lg:text-3xl text-2xl' />
                        <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <FaTwitter className='lg:text-3xl text-2xl' />
                        <img src="/images/btnright.svg" width={100} height={100} alt='border' className='absolute' />
                    </div>
                </div> */}
            </div>
            <div className='w-full bg-black bg-opacity-20 flex justify-center items-center py-5'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-slate-400 mb-2 lg:text-sm text-xs'>© 2025 Copyright | Atechno | All Rights Reserved</span>
                    <div className='lg:flex justify-between items-center'>
                        <span className='lg:text-sm text-xs text-slate-400'>
                            Designed and Developed by &nbsp;
                        </span>
                        <Link href="https://www.pixsans.in" target='_blank' className='flex justify-center'>
                            <img src='/pixsans_logo.svg' width={100} height={100} alt='Pixsans_logo' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer