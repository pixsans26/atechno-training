import { getCourses } from "@/api/getData";
import { env } from "@/utils/env";
import Link from "next/link";
const baseUrl = env.NEXT_PUBLIC_API_URL
export default async function About() {
    const { data: courses } = await getCourses()
    return (
        <>
            <section className='w-full mb-10 relative'>
                <div className='w-full h-[100%] absolute flex justify-center items-center mx-auto'>

                    <div className='text-center'>
                        <h1 className='heading-2 lg:mb-10 mb-2'>Courses</h1>
                        <span className='text-teal-400'>Home • Courses</span>
                    </div>
                </div>
                <img src='/heading-bg.png' width={1000} height={100} alt='bg' className='w-full' />

            </section>



            {/* courses */}
            <section className="lg:w-10/12 w-11/12 mx-auto lg:mb-20 mb-5">
                <div className="w-full lg:w-8/12 mx-auto mb-10 text-center">
                    <span className="theme-grad font-semibold">Our Courses</span>
                    <h2 className="heading-2 lg:mb-10 mb-5">Training Modules</h2>
                </div>
                <div className="lg:w-10/12 w-11/12 grid lg:grid-cols-3 grid-cols-1 mx-auto gap-16">

                    {courses?.map((curElm: any) => (

                        <Link href={`/courses/${curElm.id}`} key={curElm.id}>
                            <div className="bg-border p-[2px] rounded-2xl">
                                <div className='w-full h-full relative justify-start bg-primary rounded-2xl p-6'>
                                    <div className='w-full bg-dark-theme h-60 overflow-hidden rounded-md mb-5 flex justify-center items-center'>
                                        <img src={`${baseUrl}/assets/${curElm.image}`} alt={curElm.course_name} className="h-60 w-full object-cover rounded-lg" />
                                    </div>
                                    <div className='w-full justify-start'>
                                        <h3 className="text-2xl font-bold mb-1">{curElm.course_name}</h3>
                                        <div className="w-full flex justify-between">
                                            <div className="items-center flex flex-col">
                                                <h4 className="text-lg text-teal-400">Online</h4>
                                                <p>{curElm.online}</p>
                                            </div>
                                            <div className="items-center flex flex-col">
                                                <h4 className="text-lg text-teal-400 ">Offline</h4>
                                                <p>{curElm.offline}</p>
                                            </div>
                                            <div className="items-center flex flex-col">
                                                <h4 className="text-lg text-teal-400">Total Months</h4>
                                                <p>{curElm.total_months}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}

                </div>
            </section>

            {/* contact */}


        </>
    );
}