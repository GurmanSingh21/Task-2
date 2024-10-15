import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <section id='footer' className='flex sm:flex-row flex-col space-y-8 md:px-14 px-4 mb-4'>
      <div className='flex flex-col sm:flex-row flex-none sm:space-x-14 space-x-0 justify-center items-center'>
        <img src={logo} alt="logo" className="w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40" />

        <p className='text-textSecondary font-body text-xl sm:mt-8 mt-6'>Savor the artistry where<br />every dish is a culinary<br />masterpiece</p>
      </div>
      <div className='flex flex-row grow justify-evenly px-8'>
        <span className='space-y-6'>
          <h3 className='font-heading font-bold'>Useful links</h3>
          <nav className='flex pb-2 justify-between items-center'>
            <ul className='list-none flex flex-col justify-end items-start flex-1 space-y-6'>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#sevices">About Us</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#">Events</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#services">Blogs</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </nav>
        </span>
        <span className='space-y-6'>
          <h3 className='font-heading font-bold'>Main Menu</h3>
          <nav className='flex pb-2 justify-between items-center'>
            <ul className='list-none flex flex-col justify-end items-start flex-1 space-y-6'>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#home">Home</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#services">Offers</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#menu">Menu</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="#">Reservation</a>
              </li>
            </ul>
          </nav>
        </span>
        <span className='space-y-6'>
          <h3 className='font-heading font-bold'>Contact Us</h3>
          <nav className='flex pb-2 justify-between items-center'>
            <ul className='list-none flex flex-col justify-end items-start flex-1 space-y-6'>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="mailto:abc@example.com">abc@example.com</a>
              </li>
              <li className='font-body font-normal text-textSecondary hover:text-secondary'>
                <a href="tel:+64958248966">+64 958 248 966</a>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </section>
  )
}

export default Footer