import React from 'react';
import { FaPlay } from 'react-icons/fa';
import hero from '../assets/hero.PNG'; // Ensure the path is correct
import menu1 from '../assets/menu1.png'; // Import the food images
import menu2 from '../assets/menu2.png';

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-10 py-6 mb-20' id='home'>
      {/* Left Section (Heading, Subheading, and Buttons) */}
      <div className='flex flex-1 justify-center items-start flex-col md:px-16 px-6'>
        {/* Heading and Subheading */}
        <h1 className='text-textPrimary font-extrabold font-heading text-[2.25rem] md:text-[3.25rem] py-4 leading-tight'>
          Dive into Delights Of Delectable <span className='text-secondary'>Food</span>
        </h1>
        <p className='font-body text-xl md:text-2xl py-4 text-textSecondary'>
          Where Each Plate Weaves a Story of Culinary <br /> 
          Mastery and Passionate Craftsmanship.
        </p>

        {/* Buttons */}
        <div className='py-6 flex flex-wrap items-center space-x-4'>
          <button className="flex items-center h-12 w-32 bg-secondary text-white font-body pl-6 py-2 rounded-full hover:bg-green-600 transition duration-300 shadow-custom-secondary">
            Order Now
          </button>
          <span className='flex gap-4 justify-center items-center mt-4 md:mt-0'>
            <p className='font-body font-normal'>Watch Video</p>
            <div className='flex bg-white rounded-full items-center justify-center h-10 w-10 shadow-lg'>
              <FaPlay className='w-4 h-4'/>
            </div>
          </span>
        </div>
      </div>

      {/* Right Section (Hero Image with Speech Bubble and Food Cards) */}
      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        {/* Circle Background */}
        <div className='bg-secondary w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full relative flex justify-center items-center'>
          <img
            src={hero}
            alt="Delicious food"
            className="w-[180px] h-[180px] md:w-3/4 md:h-3/4 object-cover rounded-full" 
          />
          {/* Speech Bubble */}
          <div className='absolute top-4 md:top-10 left-4 md:left-10 bg-white shadow-lg px-4 py-2 rounded-lg'>
            <p className='text-xs font-body font-semibold'>Hot spicy Food 🌶️</p>
          </div>
        </div>

        {/* Food Cards */}
        <div className='absolute -bottom-14 md:bottom-[-36px] left-6 md:left-[-16px] flex space-x-2 md:space-x-4 overflow-hidden'>
          {/* Card 1 */}
          <div className='bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-row items-center max-h-20 md:max-h-28 w-[120px] md:w-auto'>
            <img src={menu1} alt="Spicy noodles" className='w-[40px] h-[40px] md:w-full md:h-[120px] rounded-full'/>
            <div className='flex flex-col ml-2 md:ml-4'>
              <h4 className='text-xs md:text-sm font-bold mt-1 md:mt-2'>Spicy noodles</h4>
              <div className='flex items-center'>
                <span className='text-yellow-500 text-[10px] md:text-xs'>★★★★☆</span>
              </div>
              <p className='text-[10px] md:text-xs mt-1 md:mt-2'>$18.00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-row max-h-20 md:max-h-28 items-center w-[120px] md:w-auto'>
            <div className='overflow-hidden'>
              <img src={menu2} alt="Vegetarian salad" className='w-[40px] h-[40px] md:w-full md:h-[120px] object-cover rounded-full'/>
            </div>
            <div className='flex flex-col ml-2 md:ml-4'>
              <h4 className='text-xs md:text-sm font-bold mt-1 md:mt-2'>Vegetarian salad</h4>
              <div className='flex items-center'>
                <span className='text-yellow-500 text-[10px] md:text-xs'>★★★★☆</span>
              </div>
              <p className='text-[10px] md:text-xs mt-1 md:mt-2'>$23.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
