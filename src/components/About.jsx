import React from 'react'
import { IoFastFoodOutline, IoGiftOutline } from 'react-icons/io5'
import { TbShoppingBagCheck, TbTruckDelivery } from 'react-icons/tb'

const About = () => {
  return (
    <section id='services' className='flex md:flex-row flex-col sm:py-10 py-6 mb-20 justify-between'>
      <div className='flex flex-1 justify-center items-start flex-col md:px-16 px-6 space-y-10'>
      <h1 className='font-heading text-xl font-semibold text-red-500'>
      OUR STORY & SERVICES
      </h1>
      <h1 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-textPrimary mb-2 leading-snug'>
            <span className='block'>Our Culinary Journey</span>
            <span className='block'>And Services</span>
          </h1>
        <p className='font-body text-xl md:text-2xl py-4 text-textSecondary'>
        Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br />blending culinary artistry with warm hospitality.
        </p>

        {/* Buttons */}
        <div className='py-6 flex flex-wrap items-center space-x-4'>
          <button className="flex items-center h-12 w-32 bg-secondary text-white font-body justify-center rounded-full hover:bg-green-600 transition duration-300 shadow-custom-secondary">
            Explore
          </button>
        </div>
      </div>
      <div className='flex-1 justify-center items-start flex-col md:px-16 px-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>
  <div className='bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center rounded-3xl w-full h-full'>
    <div className="text-secondary mb-4">
      <IoFastFoodOutline className='w-16 h-16'/>
    </div>
    <h3 className="text-xl font-bold font-heading text-secondary">CATERING</h3>
    <p className="text-lg font-semibold font-body mt-2 text-card">Delight your guests with our flavors and presentation</p>
  </div>
  
  <div className='bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center rounded-3xl w-full h-full'>
    <div className="text-secondary mb-4">
      <TbTruckDelivery className='w-16 h-16'/>
    </div>
    <h3 className="text-xl font-bold font-heading text-secondary">FAST DELIVERY</h3>
    <p className="text-lg font-semibold font-body mt-2 text-card">We deliver your order promptly to your door</p>
  </div>
  
  <div className='bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center rounded-3xl w-full h-full'>
    <div className="text-secondary mb-4">
      <TbShoppingBagCheck className='w-16 h-16'/>
    </div>
    <h3 className="text-xl font-bold font-heading text-secondary">ONLINE ORDERING</h3>
    <p className="text-lg font-semibold font-body mt-2 text-card">Explore menu & order with ease using our Online Ordering</p>
  </div>
  
  <div className='bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center rounded-3xl w-full h-full'>
    <div className="text-secondary mb-4">
      <IoGiftOutline className='w-16 h-16'/>
    </div>
    <h3 className="text-xl font-bold font-heading text-secondary">GIFT CARDS</h3>
    <p className="text-lg font-semibold font-body mt-2 text-card">Give the gift of exceptional dining with Foodi Gift Cards</p>
  </div>
</div>



    </section>
  )
}

export default About