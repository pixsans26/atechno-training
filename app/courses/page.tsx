import { getCourses } from "@/api/getData";
import { env } from "@/utils/env";
import Link from "next/link";
const baseUrl = env.NEXT_PUBLIC_API_URL

export default async function About() {
    const { data: courses } = await getCourses()
    return (
        <>
            <section className='w-full relative'>
                <div className='w-full h-[100%] absolute flex justify-center items-center mx-auto'>

                    <div className='text-center'>
                        <h1 className='heading-2 lg:mb-10 mb-2'>Courses</h1>
                        <span className='text-teal-400'>Home • Courses</span>
                    </div>
                </div>
                <img src='/heading-bg.png' width={1000} height={100} alt='bg' className='w-full' />

            </section>



            {/* courses */}
            <section className="w-full bg-white py-10">
                <section className="w-11/12 mx-auto">
                    <div className="w-full lg:w-8/12 mx-auto mb-10 text-center">
                        <span className="theme-grad font-semibold">Our Courses</span>
                        <h2 className="heading-2 lg:mb-10 mb-5 text-gray-950">Training Modules</h2>
                    </div>
                    <div className="w-11/12 grid lg:grid-cols-3 grid-cols-1 mx-auto gap-16">
                        {courses?.map((curElm: any) => (

                            <Link href={`/courses/${curElm.id}`} key={curElm.id}>
                                <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
                                    <div className='w-full h-full relative justify-start '>
                                        <div className='w-full bg-dark-theme h-48 overflow-hidden flex justify-center items-center'>
                                            <img src={`${baseUrl}/assets/${curElm.image}`} alt={curElm.course_name} className="h-48 w-full object-cover" />
                                        </div>
                                        <div className='w-full justify-start p-4'>
                                            <h4 className="text-lg font-semibold mb-6 text-gray-950">{curElm.course_name}</h4>
                                            <div className="w-full flex justify-between mb-4">
                                                <div className="flex justify-start gap-2 items-center">
                                                    <div className="h-[4rem] w-[4rem] flex justify-center align-center rounded-full">
                                                        <img src="/icons/Calender.svg/" />
                                                    </div>
                                                    <p className="text-gray-800">{curElm.duration}</p>
                                                </div>
                                                <div className="flex justify-start gap-2 items-center">
                                                    <div className="h-[4rem] w-[4rem] flex justify-center align-center rounded-full">
                                                        <img src="/icons/Mode.svg/" />
                                                    </div>
                                                    <p className="text-gray-800">{curElm.mode}</p>
                                                </div>
                                            </div>
                                            <hr className="mb-4"></hr>
                                            <div className="w-full flex justify-between">
                                                <div className="flex justify-start gap-2 items-center">
                                                    <div className="h-[4rem] w-[4rem] flex justify-center align-center rounded-full">
                                                        <img src="/icons/certificate.svg/" />
                                                    </div>
                                                    <p className="text-gray-800">Certification</p>
                                                </div>
                                                <div className="flex justify-start gap-2 items-center">
                                                    <h5 className="text-gray-800 theme-grad font-semibold">Explore Now</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))}

                    </div>
                </section>
            </section>

            {/* contact */}


        </>
    );
}