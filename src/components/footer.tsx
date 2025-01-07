import React from 'react'
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-white w-full bg-[#000] p-8 md:flex justify-evenly'>
            <div className='text-lg tracking-wider  p-2 text-white text-center'>
               Handcrafted by me &copy;{currentYear}
            </div>
            <ul className='flex items-center justify-center cursor-pointer gap-6 text-2xl '>
                <a href='mailto:bencyubahiro77@gmail.com' target='_blank' rel='noopener noreferrer' className='social'><FaEnvelope /></a>
                <a href='https://github.com/bencyubahiro77' target='_blank' rel='noopener noreferrer' className='social'><FaGithub /></a>
                <a href='https://linkedin.com/in/cyubahiro-benjamin-167933218' target='_blank' rel='noopener noreferrer' className='social'><FaLinkedin /></a>
                <a href='https://twitter.com/cyubahirobenja3' target='_blank' rel='noopener noreferrer' className='social'><FaTwitter /></a>
                <a href='https://instagram.com/benbeno8?utm_source=qr' target='_blank' rel='noopener noreferrer' className='social'><FaInstagram /></a>
            </ul>
        </div>
    )
}

export default footer