import Image from "next/image";
import { getSingleCourses } from "@/api/getData";
import { env } from "@/utils/env";

const baseUrl = env.NEXT_PUBLIC_API_URL

export default async function SingleCourse({ params }: any) {
    const { data: course } = await getSingleCourses(params.id)
    const Details = course.details

    return (
        <>
            <section className="lg:w-10/12 w-11/12 lg:py-5 mx-auto py-2">
                <div>
                    <p className="text-gray-500 lg:text-lg text-sm">Home • Courses • {course.course_name}</p>
                    <h2 className="font-semibold theme-grad lg:text-3xl text-2xl">{course.course_name}</h2>
                </div>
            </section>

            {/* Product */}
            <section className="lg:w-8/12 w-11/12 mx-auto lg:flex gap-5 items-center mb-5">
                <div className="lg:w-6/12 w-full mx-auto flex justify-center items-center bg-dark-theme rounded-xl lg:h-auto h-auto order-first lg:order-last mb-5 p-4">
                    <Image
                        src={`${baseUrl}/assets/${course.image.id}`}
                        height={1000}
                        width={1000}
                        alt={course.course_name}
                        className="object-cover" />
                </div>
                <div className="lg:w-6/12 w-full mx-auto">



                    {/* Features */}
                    <div className="mb-5">
                        <h4 className="mb-2 theme-grad font-semibold lg:text-xl text-lg">{course.subheading}</h4>
                        <p>{course.description}</p>
                    </div>
                    {/* Description */}
                    <div className="mb-5">
                        <h3 className="mb-2 theme-grad font-semibold lg:text-xl text-lg">Duration</h3>
                        <p>Online: {course.online} Months</p>

                        <p>Offline: {course.online} Months</p>

                        <p>Total: {course.online} Months</p>
                    </div>
                </div>
            </section>

            <hr className="lg:w-8/12 w-11/12 mx-auto my-5" />

            {/* Specification */}
            <section className="lg:w-8/12 w-11/12 mx-auto mb-5">

                <div className="w-full" dangerouslySetInnerHTML={{ __html: Details }}>
                </div>
            </section>
        </>
    )
}