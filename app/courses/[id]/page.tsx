import Image from "next/image";
import { getSingleCourses } from "@/api/getData";
import { env } from "@/utils/env";
import Link from "next/link";

const baseUrl = env.NEXT_PUBLIC_API_URL



export default async function SingleCourse({ params }: any) {
    const { data: course } = await getSingleCourses(params.id)
    const Details = course.details
    const Highlights = course.key_highlights

    return (
        <>
            <section className="w-full lg:h-[28rem] h-[18rem] bg-white relative overflow-hidden">
                <section className="w-full lg:flex hidden">
                    <Image className="w-full obejct-cover absolute bottom-0" height={1000} width={10000} alt="bg" src={`${baseUrl}/assets/${course.background.id}`} />
                </section>
                <section className="w-full absolute top-0">
                    <div className="lg:w-10/12 w-11/12 lg:py-5 mx-auto py-2 ">
                        <div className="mb-10">
                            <p className="text-gray-500 lg:text-lg text-sm">Home • Courses • {course.course_name}</p>
                        </div>
                        <div className="lg:w-5/12 w-11/12">
                            <h2 className="font-semibold text-gray-950 lg:text-3xl text-2xl mb-5">{course.course_name}</h2>
                            <p className="h4 text-lg text-slate-600">{course.subheading}</p>
                        </div>
                    </div>
                </section>

            </section>

            <section className="w-full bg-slate-50">
                {/* Product */}
                <section className="lg:w-10/12 w-11/12 lg:flex justify-between mx-auto gap-5 items-center relative ">

                    {/* card */}
                    <div className="lg:w-4/12 w-full mx-auto top-[-20rem] right-0 items-center bg-dark-theme rounded-2xl lg:h-auto h-auto order-first lg:order-last mb-5 lg:absolute shadow-lg" >
                        <div className="rounded-2xl overflow-hidden bg-white">
                            <div className='w-full h-full relative justify-start '>
                                <div className='w-full bg-dark-theme lg:h-60 overflow-hidden flex justify-center items-center'>
                                    <img src={`${baseUrl}/assets/${course.image.id}`} alt={course.course_name} className="lg:h-60 w-full object-cover" />
                                </div>
                                <div className='w-full justify-start lg:px-12 px-4 py-4'>
                                    {/* button */}
                                    <div className="w-full flex justify-between py-8">
                                        <Link href={'/'} className="bg-teal-500 w-full h-16 flex justify-center items-center rounded-md font-semibold text-xl">Enroll Now</Link>
                                    </div>

                                    {/* Coures Includes */}
                                    <div className="w-full flex justify-between mb-2">
                                        <h4 className="text-gray-900 font-semibold text-xl">Course Includes</h4>
                                    </div>
                                    <hr className="mb-4"></hr>

                                    {/* <h4 className="text-lg font-semibold mb-6 text-gray-950">{curElm.course_name}</h4> */}
                                    {/* Duration */}
                                    <div className="w-full flex justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/course-icons/calendar.svg" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Duration :</h5>
                                        </div>
                                        <div className="flex justify-start gap-2 items-center">

                                            <p className="text-gray-500">{course.duration}</p>
                                        </div>
                                    </div>

                                    <hr className=""></hr>

                                    {/* Mode */}
                                    <div className="w-full flex justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/course-icons/mode.svg" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Mode :</h5>
                                        </div>
                                        <div className="flex justify-start gap-2 items-center">

                                            <p className="text-gray-500">{course.mode}</p>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    {/* Category */}
                                    <div className="w-full flex justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/course-icons/tag.svg" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Category :</h5>
                                        </div>
                                        <div className="flex justify-start gap-2 items-center">

                                            <p className="text-gray-500">{course.category}</p>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    {/* Key Highlights */}
                                    <div className="w-full justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/course-icons/lamp.svg" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Key Highlights :</h5>
                                        </div>
                                        <div className="justify-start items-center ps-20 text-gray-500" dangerouslySetInnerHTML={{ __html: Highlights }}>

                                        </div>
                                    </div>

                                    <hr></hr>

                                    {/* Key Highlights */}
                                    <div className="w-full justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/course-icons/placement.svg" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Placement Assitance :</h5>
                                        </div>
                                        <div className="flex justify-start gap-2 items-center ps-20">
                                            <div className="text-gray-500 flex gap-5 justify-between items-center">
                                                {course?.companies?.map((curElm: any) => (
                                                    <div key={curElm.id}>
                                                        <Image height={100} width={10000} alt="content" className="h-auto max-w-full" src={`${baseUrl}/assets/${curElm.directus_files_id}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    {/* Certification */}
                                    <div className="w-full flex justify-between py-4">
                                        <div className="flex justify-start gap-4 items-center">
                                            <div className="h-[2rem] w-[2rem] flex justify-center align-center rounded-full">
                                                <img src="/icons/certificate.svg/" />
                                            </div>
                                            <h5 className="text-gray-800 font-semibold">Certification</h5>
                                        </div>
                                        <div className="flex justify-start gap-2 items-center">

                                            <p className="text-gray-500">
                                                {course?.certification ? 'Provided' : 'Not Provided'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-7/12 w-full">

                        {/* About */}
                        <div className="py-10">
                            <p className="text-gray-600">{course.about}</p>
                        </div>

                        {/* Description */}
                        <div className="w-full" dangerouslySetInnerHTML={{ __html: Details }}>
                        </div>
                    </div>

                </section>

            </section>




        </>
    )
}