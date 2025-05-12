import Query from "@/components/query"

export default function About() {
    return (
        <>
            <section className='w-full mb-10 relative'>
                <div className='w-full h-[100%] absolute flex justify-center items-center mx-auto'>

                    <div className='text-center'>
                        <h1 className='heading-2 lg:mb-10 mb-2'>About</h1>
                        <span className='text-teal-400'>Home • About</span>
                    </div>
                </div>
                <img src='/heading-bg.png' width={1000} height={100} alt='bg' className='w-full' />

            </section>
            {/* who we are */}
            <section className="w-full mx-auto lg:mb-32 mb-20">
                <div className="lg:w-10/12 w-11/12 mx-auto lg:flex justify-between gap-10 mb-20">

                    <div className="lg:w-7/12 w-full flex items-center ">
                        <div className="w-full">
                            <span className="theme-grad font-semibold mb-8 uppercase">About the program</span>
                            <h2 className="heading-2 lg:mb-10 mb-8">Empowering the Workforce of Tomorrow with Skill Development</h2>
                            <p className="text-normal mb-4">In today’s fast-paced, technology-driven world, <span className="font-bold theme-grad">skill development is not just an option—it’s a necessity</span>. As industries evolve and job roles transform, the demand for a skilled, adaptable workforce continues to grow.</p>
                            <p className="text-normal mb-4">At <span className="font-bold theme-grad">Atechno Embedded Solutions (OPC) Private Limited</span>, we are dedicated to empowering individuals with practical, job-ready skills through our structured <span className="font-bold theme-grad">Skill Development Courses</span>. These programs are carefully designed to <span className="font-bold theme-grad">bridge the gap between academic learning and industry expectations</span>, enabling learners to excel in real-world environments.</p>

                        </div>
                    </div>
                    <div className="lg:w-5/12 w-full lg:order-first order-last bg-gradient-to-tl from-[#1b2834] to-[#252e40]  rounded-xl">
                        <img src="/images/about.jpg" width={1000} height={1000} alt="image" className="rounded-lg" />
                    </div>

                </div>
            </section>

            {/* Person Behind */}
            <section className="lg:w-10/12 w-11/12 mx-auto relative lg:mb-32 mb-20">
                <img className="w-full h-auto hidden lg:flex" src="/images/borderlg.svg" width={1000} height={100} alt="bg" />
                <div className="lg:w-full lg:absolute top-24 left-10 lg:flex flex-col justify-between gap-20">
                    <div className="lg:w-5/12 w-full flex flex-col justify-center">

                        <h2 className="heading-2 lg:mb-10 mb-5">Our training modules cover a wide spectrum of key areas, including:</h2>
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex items-center mb-5 p-5 text-normal">
                                <img src="/icons/check.svg" className="h-10" width={100} height={100} alt="icons" />
                                <p className="font-bold theme-grad">Technical Skills</p>
                            </div>
                            <div className="w-full flex items-center mb-5 p-5 text-normal">
                                <img src="/icons/check.svg" className="h-10" width={100} height={100} alt="icons" />
                                <p className="font-bold theme-grad">Digital Literacy</p>
                            </div>
                            <div className="w-full flex items-center mb-5 p-5 text-normal">
                                <img src="/icons/check.svg" className="h-10" width={100} height={100} alt="icons" />
                                <p className="font-bold theme-grad">Industrial Training</p>
                            </div>
                            <div className="w-full flex items-center mb-5 p-5 text-normal">
                                <img src="/icons/check.svg" className="h-10" width={100} height={100} alt="icons" />
                                <p className="font-bold theme-grad">Entrepreneurship</p>
                            </div>
                            <div className="w-full flex items-center mb-5 p-5 text-normal">
                                <img src="/icons/check.svg" className="h-10" width={100} height={100} alt="icons" />
                                <p className="font-bold theme-grad">Soft Skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full lg:absolute relative lg:top-[-100px] lg:right-0 flex justify-end">
                        {/* <img className="absolute w-4/12 lg:bottom-[-100px] bottom-0 left-0 " src="/images/person.png" width={100} height={100} alt="pcb2" /> */}
                        <img className="lg:w-10/12 w-full rounded-lg" src="/images/softskills.jpg" width={100} height={100} alt="pcb2" />
                    </div>
                </div>
            </section>

            <section className="lg:w-10/12 w-11/12 mx-auto relative lg:mb-32 mb-20">
                <p className="text-normal mb-5">These courses cater to <span className="font-bold theme-grad">students, working professionals, entrepreneurs, and job seekers</span>, ensuring inclusive learning for all career stages</p>
                <p className="text-normal mb-5">Whether you're preparing for your first job, upgrading your existing skills, or exploring new career paths, our courses provide the <span className="font-bold theme-grad">tools, knowledge, and confidence</span> you need to thrive in today’s competitive landscape.</p>
                <p className="text-normal mb-5"><span className="font-bold theme-grad">Join us</span> in building a <span className="font-bold theme-grad">skilled, self-reliant, and future-ready generation</span>.</p>
            </section>

            {/* Teams */}
            <section className="lg:w-10/12 w-11/12 mx-auto lg:mb-20 mb-5">
                <div className="w-full lg:w-8/12 mx-auto mb-10 text-center">
                    <span className="theme-grad font-semibold">Rainbow Team Member</span>
                    <h2 className="heading-2 lg:mb-10 mb-5">The Experts</h2>
                </div>
                <div className="lg:w-10/12 w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-16">

                    {/* {products?.map((curElm: any) => ( */}
                    {/* <Link href={`/products/${curElm.id}`} key={curElm.id}> */}
                    <div className="bg-border p-[2px] rounded-2xl">
                        <div className='w-full h-full relative justify-start bg-primary rounded-2xl p-6'>
                            <div className='w-full bg-dark-theme h-60 rounded-md mb-5 p-2 flex justify-center items-center'>
                                <img src="/images/team/pallavi.png" alt='img team' className="h-full w-auto" />
                            </div>
                            <div className='w-full justify-start'>
                                <h3 className="text-2xl font-bold mb-1">Dr. Pallavi Mulmule </h3>
                                <h4 className="text-lg font-bold mb-1">Training consultant</h4>
                                <p className="text-small">
                                    Dr. Pallavi Mulmule holds a Ph.D. degree specializing in Medical Image Processing leveraging artificial intelligence techniques in healthcare. Diverse experience across applied research and freelance consulting. Expertise in machine learning, deep learning, large language models and data analytics, with a strong track record of delivering impactful AI-driven projects.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-border p-[2px] rounded-2xl">
                        <div className='w-full h-full relative justify-start bg-primary rounded-2xl p-6'>
                            <div className='w-full bg-dark-theme h-60 rounded-md mb-5 p-2 flex justify-center items-center'>
                                <img src="/images/team/sir.jpeg" alt='img team' className="h-full w-auto" />
                            </div>
                            <div className='w-full justify-start'>
                                <h3 className="text-2xl font-bold mb-1">Mr. Sangameshwar Kendre</h3>
                                <h4 className="text-lg font-bold mb-1">Training consultant</h4>
                                <p className="text-small">
                                    Accomplished technical consultant and academic with 20+ years of
                                    expertise in Embedded Systems, IoT, and Digital Electronics. Known for
                                    blending deep technical proficiency with a passion for mentorship and
                                    innovation. Currently engaged with BITS Pilani, WILP Division as an Adjunct Faculty and
                                    ATechno Embedded Solution (OPC) Pvt. Ltd. as a Technical Consultant,
                                    delivering industry-aligned solutions and academic excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                    {/* ))} */}

                </div>
            </section>

            {/* contact */}

            <section className="w-full mx-auto mb-20">
                <div className="w-full lg:w-8/12 mx-auto mb-10 text-center">
                    <span className="theme-grad font-semibold">Contact us</span>
                    <h2 className="heading-2 lg:mb-10 mb-5">Get in touch with us!</h2>
                </div>
                <div className="lg:w-10/12 w-11/12 mx-auto lg:flex justify-between gap-5">

                    <div className="lg:w-4/12 w-full flex flex-col gap-4 mb-5">
                        <div className='w-full bg-[#0A1A2B] p-10 rounded-2xl flex items-center justify-between gap-4'>
                            <div className='w-3/12 flex justify-center items-center'>
                                <img src='/icons/Location 1.svg' width={100} height={100} alt='location' className='w-8/12' />
                            </div>
                            <div className="w-9/12">
                                <h4 className='font-bold text-2xl mb-2'>Location</h4>
                                <p className='text-xl text-slate-400'>Ph-I, Bldg-A-9, Fl-103, SN-17, Shivsagar City Ph-I, Wadgaon BK, Pune-411041, Maharashtra, India</p>
                            </div>
                        </div>
                        <div className='w-full bg-[#0A1A2B] p-10 rounded-2xl flex items-center justify-between gap-4'>
                            <div className='w-3/12 flex justify-center items-center'>
                                <img src='/icons/Phone.svg' width={100} height={100} alt='location' className='w-8/12' />
                            </div>
                            <div className="w-9/12">
                                <h4 className='font-bold text-2xl mb-2'>Mobile</h4>
                                <p className='text-xl text-slate-400'>+91 9842394728</p>

                            </div>
                        </div>
                        <div className='w-full bg-[#0A1A2B] p-10 rounded-2xl flex items-center justify-between gap-4'>
                            <div className='w-3/12 flex justify-center items-center'>
                                <img src='/icons/Email.svg' width={100} height={100} alt='location' className='w-8/12' />
                            </div>
                            <div className="w-9/12">
                                <h4 className='font-bold text-2xl mb-2'>Email</h4>
                                <p className='text-xl text-slate-400'>atechno@gmail.com</p>

                            </div>
                        </div>
                    </div>
                    <Query />
                </div>
            </section>

        </>
    );
}