import React from 'react';
import { categoryItems } from '../constants';

const Categories = () => {
  return (
    <section id='menu' className='mb-20 flex items-start md:px-16 px-6 justify-center flex-col space-y-10'>
      {/* Heading */}
      <h1 className='font-heading font-semibold text-xl text-red-500'>
        CUSTOMER FAVORITES
      </h1>
      <h1 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-textPrimary mb-2 leading-snug'>
        Popular Categories
      </h1>
      
      {/* Category Items */}
      <div className='w-full py-4 flex flex-col md:flex-row md:items-start items-center  gap-14'>
        {categoryItems.map((cat, index) => (
          <div key={index} className='w-full max-w-[300px] h-[300px] shadow-xl rounded-xl items-center flex-col flex'>
            <div className='my-4 w-[50%] h-[50%] rounded-full overflow-hidden'>
              <img 
                src={cat.img} 
                alt={cat.title} 
                className='w-full h-full object-cover transform scale-150 aspect-auto' 
              />
            </div>
            <h4 className='font-semibold font-heading text-base md:text-lg lg:text-xl'>
              {cat.title}
            </h4>
            <p className='font-body text-textSecondary text-sm md:text-base'>
              {cat.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
