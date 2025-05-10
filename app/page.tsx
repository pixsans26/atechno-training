
// import Subscribe from "@/components/subscribe";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";



export default async function Home() {


  return (
    <>
      <section className="w-full mx-auto lg:py-36 py-28 relative">
        <img className="absolute w-3/12 left-0 top-0" src="/images/blur-left.svg" width={100} height={100} alt="pcbui" />
        <img className="absolute w-3/12 right-0" src="/images/blur-right.svg" width={100} height={100} alt="pcbui" />
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:w-8/12 w-11/12 mx-auto ">
            <h1 className="main-heading text-center align-middle mb-4">Your Trusted Partner in <span className="font-bold theme-grad">Education & Skill Development for Employability</span></h1>
            <p className="text-normal lg:w-8/12 w-10/12 mx-auto text-center">Your Trusted Partner in Building a Job-Ready Future</p>
          </div>
          <div className="lg:w-8/12 w-full  mx-auto">
            <img className="w-full" src="/images/pcbui.svg" width={500} height={500} alt="pcbui" />
          </div>
        </div>
      </section>

      {/* what we do   */}

      <section className="w-full bg-gradient-to-r from-[#171a217f] bg-opacity-30 to-[#171a2114] lg:py-28 py-10 lg:mb-32 mb-16">
        <div className="lg:w-10/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between gap-10 lg:mb-10 mb-5">
          <div className="lg:order-first order-last lg:w-5/12 w-full">
            <div className="bg-gradient-to-tl from-[#1b2834] to-[#252e40]  rounded-xl">
              <img src="/images/skilldev.jpg" width={1000} height={1000} alt="image" />
            </div>
            <div className="hidden py-5">
              <Link href="/contact" className="techno-btn">Enquiry Now <span><FaArrowRight /></span></Link>
            </div>
          </div>

          <div className="lg:w-7/12 w-full flex items-center ">
            <div className="lg:w-10/12 w-full">
              <span className="theme-grad font-semibold lg:mb-8 mb-1">INTRODUCTION</span>
              <h2 className="heading-2 lg:mb-10 mb-5">Skill Development Courses</h2>
              <p className="text-normal lg:mb-10">In today’s fast-paced and technology-driven world, skill development is not just an option—it is a necessity. As industries evolve and job roles transform, the demand for a skilled and adaptable workforce continues to rise.</p>
              <p className="text-normal lg:mb-10">At <span className="font-bold theme-grad">Atechno Embedded Solutions (OPC) Private Limited</span>, we are committed to empowering individuals with <span className="font-bold theme-grad">practical, job-ready skills</span> through our structured <span className="font-bold theme-grad">Skill Development Courses</span>. These programs are designed to bridge the gap between academic knowledge and industry requirements, enabling learners to thrive in real-world environments.</p>

            </div>
          </div>
        </div>
        <div className="lg:gap-20 gap-10 lg:w-10/12 w-11/12 mx-auto">
          <p className="text-normal lg:mb-5">Our training modules span across key areas such as <span className="font-bold theme-grad">technical skills, digital literacy, industrial training, entrepreneurship, and soft skills</span>—catering to students, professionals, entrepreneurs, and job seekers alike.</p>
          <p className="text-normal lg:mb-5">Whether you are preparing for your first job, upgrading your current skills, or exploring new career paths, our courses provide the <span className="font-bold theme-grad">tools, knowledge, and confidence</span> to succeed in today’s competitive landscape.</p>
          <p className="text-normal lg:mb-5">Join us in building a skilled, self-reliant, and future-ready generation.</p>
        </div>
      </section>

      {/* Subscribe */}
      {/* 
      <Subscribe /> */}
    </>
  );
}
