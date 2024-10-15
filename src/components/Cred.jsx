import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Cred = () => {
  return (
    <section className='flex flex-row md:px-14 px-4 mb-4'>
        <div className='flex flex-row gap-4 flex-none'>
            <a href="https://www.facebook.com/" target='_blank'>
            <span className='w-14 h-14 bg-iconBg rounded-full items-center justify-center flex hover:bg-secondary hover:text-white text-textSecondary'>
                <FaFacebook className='w-8 h-8' />
            </span>
            </a>
            <a href="https://www.instagram.com/">
            <span className='w-14 h-14 bg-iconBg rounded-full items-center justify-center flex hover:bg-secondary hover:text-white text-textSecondary'>
                <FaInstagram className='w-8 h-8'/>
            </span>
            </a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className='w-14 h-14 bg-iconBg rounded-full items-center justify-center flex hover:bg-secondary hover:text-white text-textSecondary'>
                <FaTwitter className='w-8 h-8'/>
            </span>
            </a>
            <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
            <span className='w-14 h-14 bg-iconBg rounded-full items-center justify-center flex hover:bg-secondary hover:text-white text-textSecondary'>
                <FaYoutube className='w-8 h-8'/>
            </span>
            </a>
        </div>
        <div className='grow justify-evenly flex items-center'>
            <p className='font-body text-textSecondary text-xl'>Copyright<BiCopyright className='inline pb-1 '/> 2023 Dscode | All rights reserved</p>
        </div>
    </section>
  )
}

export default Cred