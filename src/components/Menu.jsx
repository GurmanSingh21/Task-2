import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { specialDishes } from '../constants';
import './animate.css';

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of current set of dishes
  const [animate, setAnimate] = useState(true); // Animation trigger

  // Adjust number of dishes per page based on screen size
  const dishesPerPage = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3 ;

  // Handler to go to the next set of dishes
  const nextDishes = () => {
    setAnimate(false); // Turn off animation
    setTimeout(() => {
      // Calculate the next index in a circular fashion
      const newIndex = (currentIndex + dishesPerPage) % specialDishes.length;
      setCurrentIndex(newIndex);
      setAnimate(true); // Turn on animation after state update
    }, 300); // Delay to match animation duration
  };

  // Handler to go to the previous set of dishes
  const prevDishes = () => {
    setAnimate(false); // Turn off animation
    setTimeout(() => {
      // Calculate the previous index in a circular fashion
      const newIndex = (currentIndex - dishesPerPage + specialDishes.length) % specialDishes.length;
      setCurrentIndex(newIndex);
      setAnimate(true); // Turn on animation after state update
    }, 300); // Delay to match animation duration
  };

  // Get the dishes to display based on the current index
  const displayedDishes = specialDishes.slice(currentIndex, currentIndex + dishesPerPage);

  return (
    <section className="py-10 md:px-16 px-6" id="special-dishes">
      <div className="flex justify-start flex-col mb-8">
        <h3 className="font-heading font-semibold text-xl text-red-500 pb-6">SPECIAL DISHES</h3>
        <h1 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-textPrimary mb-2 leading-snug'>
            <span className='block'>Standout Dishes</span>
            <span className='block'>From Our Menu</span>
          </h1>
      </div>

      <div className="flex justify-center items-center relative">
        {/* Left Arrow */}
        <button
          onClick={prevDishes}
          aria-label="Previous dishes"
          className="p-2 bg-green-400 rounded-full text-white"
        >
          <AiOutlineLeft className="text-2xl" />
        </button>

        {/* Displayed Dishes with Animation */}
        <div className={`flex gap-8 px-6 transition-all duration-300 ease-in-out ${animate ? 'fade-in' : ''}`}>
          {displayedDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-xl shadow-lg w-[220px] flex flex-col p-4">
              <div className="relative">
                {/* Dish Image */}
                <img src={dish.img} alt={dish.title} className="w-full h-[120px] object-cover rounded-lg" />

                {/* Heart Icon */}
                <div className="absolute top-2 right-2 bg-green-400 p-2 rounded-full">
                  <FaHeart className="text-white" />
                </div>
              </div>

              {/* Dish Details */}
              <h3 className="font-heading text-lg font-bold mt-4">{dish.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{dish.description}</p>
              
              {/* Price and Rating */}
              <div className="flex justify-between items-center">
                <p className="text-red-500 font-bold">{dish.price}</p>
                <div className="flex items-center">
                  <FiStar className="text-yellow-500" />
                  <span className="ml-1 text-sm">{dish.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextDishes}
          aria-label="Next dishes"
          className="p-2 bg-green-400 rounded-full text-white"
        >
          <AiOutlineRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Menu;
