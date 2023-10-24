import React from 'react'
import { Element } from 'react-scroll';

const home = () => {
  return (
    <Element name="home">
      <section id="home">
          <div className='hero h-[100vh]'>
              <div className='absolute top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:max-w-5xl md:w-11/12 text-center'>
              <h4 className='font-extrabold text-5xl tracking-widest '> HEY I'M BENJAMIN CYUBAHIRO </h4>
              <p className='mt-12 leading-6 md:text-2xl w-full md:pr-12 md:pl-12'> A <span className='main-color font-bold'
                >
                Front-end Developer and Electronics Engineer</span>  building the Frontend of Websites and Web Applications
                that leads to the success of the overall product 
              </p>
              <div className='flex w-full justify-center items-center mt-32'>
                 <div className="mouse"></div> 
              </div>
              
              </div>
          </div>
      </section>
    </Element>
   
  )
}

export default home