import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { HiArrowSmRight } from "react-icons/hi";

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>

        <div className='w-[50%]'>
          <img
            src={Instructor}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>
          <div className='text-4xl font-semobold w-[50%]'>
            Become an
            <HighlightText text={"instructor"} />
          </div>

          <p className='font-medium text-[16px] w-[80%] text-richblack-300 tracking-wide -translate-y-6'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-2 items-center'>
                Start Teaching Today
                <HiArrowSmRight />
              </div>
            </CTAButton>
          </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
