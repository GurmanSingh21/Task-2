import React from 'react';
import { IoIosStar } from 'react-icons/io';
import test1 from "../assets/ppp.jpg";
import testimonial from "../assets/testimonial_main.png";

const Testimonials = () => {
  return (
    <section id='testimonial' className='flex md:flex-row flex-col sm:py-10 py-6 mb-20'>
      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
            {/* Circle Background */}
            <div className='bg-secondary w-80 h-88 rounded-full relative flex justify-center items-center'>
                <img
                    src={testimonial}
                    alt="Chef"
                    className=" object-cover rounded-full" 
                />
                <span className="absolute -left-4 top-10 text-3xl">😊</span>
                <span className="absolute right-0 bottom-16 text-3xl">🍕</span>
            </div>
            <div className="absolute bottom-2 right-28 bg-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-semibold">Our Best Chef 😉</p>
            </div>
      </div>
      <div className='flex flex-1 justify-center items-start flex-col sm:px-16 px-6 space-y-10'>
        <h4 className='font-heading font-semibold text-xl text-red-500'>TESTIMONIAL</h4>
        <div className='flex flex-col space-y-8'>
          <h1 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-textPrimary mb-2 leading-snug'>
            <span className='block'>What Our Customers</span>
            <span className='block'>Say About Us</span>
          </h1>
        <p className='font-body text-textSecondary text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
              “I had the pleasure of dining at Foodi last night, and 
                I'm still raving about the experience! The attention to 
                detail in presentation and service was impeccable”
        </p>
      </div>
        <div className='flex flex-row gap-10'>
        <div className='flex items-start justify-start relative ml-16'>
          <span className='border-4 border-white rounded-full flex justify-center items-center overflow-hidden'>
            <img src={test1} alt="Reviewer 1" className='h-12 w-12 object-cover rounded-full' />
          </span>
          <span className='absolute border-4 border-white rounded-full flex justify-center items-center overflow-hidden -ml-8'>
            <img src={test1} alt="Reviewer 2" className='h-12 w-12 object-cover rounded-full' />
          </span>
          <span className='absolute border-4 border-white rounded-full flex justify-center items-center overflow-hidden -ml-16'>
            <img src={test1} alt="Reviewer 3" className='h-12 w-12 object-cover rounded-full' />
          </span>
        </div>
        <div className='flex justify-start flex-col'>
          <h4 className='font-heading font-bold'>Customer Feedback</h4>
          <span className='py-2 flex justify-center items-start flex-row gap-2'>
            <IoIosStar className='text-yellow-300 mt-1'/>
            <p className='font-body text-textPrimary font-bold'>4.9</p>
            <p className='font-body text-textSecondary text-sm'>(18.6k Reviews)</p>
          </span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials