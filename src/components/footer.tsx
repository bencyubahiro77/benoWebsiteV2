import React from 'react'
import {  FaGithub, FaTwitter, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div className='h-[50vh] text-white w-full bg-[#000] xl:pl-16 xl:pr-16 pl-8 pr-8 '>

        <div className=' md:flex justify-between'>
            <div className='md:w-1/2 xl:pt-24 pt-8'>
                <h4 className='text-xl font-bold tracking-wider'>CYUBAHIRO Benjamin</h4>
                <p className='mt-4'>
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications
                that leads to the success of the overall product
                </p>
            </div>
            <div className='xl:pt-24 pt-8'>
                <h4 className='text-xl font-bold tracking-wider mb-4'>SOCIAL</h4>
                <ul className='flex cursor-pointer md:w-1/2 gap-4 text-2xl'>
                    <a href='mailto:bencyubahiro77@gmail.com' target='_blank' rel='noopener noreferrer'><FaEnvelope /></a>
                    <a href='https://github.com/bencyubahiro77' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                    <a href='https://linkedin.com/in/cyubahiro-benjamin-167933218' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
                    <a href='https://twitter.com/cyubahirobenja3' target='_blank' rel='noopener noreferrer'><FaTwitter/></a>
                    <a href='https://instagram.com/benbeno8?utm_source=qr' target='_blank' rel='noopener noreferrer'><FaInstagram/></a>
                </ul>
            </div>   
        </div>

        <div className='text-center text-sm tracking-wider xl:pt-28 pt-16 text-white'>
            Built by <span className='underline font-bold'>Benjamin CYUBAHIRO</span> {currentYear}
        </div>
    </div>
         
  )
}

export default footer