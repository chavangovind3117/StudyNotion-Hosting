import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
];

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-row gap-28 items-center'>

                <div className='w-[35%] flex flex-col gap-14 -translate-x-6'>
                    {
                        timeline.map((element, index) => {
                            return (
                                <div className='flex flex-row gap-6 relative' key={index} >

                                    <div className='w-[50px] h-[50px] bg-white shadow-custom flex justify-center items-center rounded-full'>
                                        <img src={element.Logo} />
                                    </div>
                                    {/* dotten lines */}
                                    {index !== timeline.length - 1 && (
                                        <div className="absolute top-[45%] translate-y-14 left-[5px] w-10 h-0 rotate-90 border-b border-dotted border-gray-300"></div>
                                    )}

                                    <div>
                                        <h2 className='font-semibold text-[18px] text-richblack-700'>{element.heading}</h2>
                                        <p className='font-normal text-[14px] text-richblack-500'>{element.Description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='relative shadow-blue-200'>

                    <img src={timelineImage}
                        alt="timelineImage"
                        className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
                    />

                    <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>TYpe of Courses</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TimelineSection
