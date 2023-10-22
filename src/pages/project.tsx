import React from 'react'
import { Element } from 'react-scroll';

const project = () => {
  return (
    <Element name="projects">
      <section id="projects">
        <div className='w-full pt-16'>
             <h4 className='text-center font-bold text-4xl tracking-wider'>PROJECTS</h4>
             <p 
               className='text-center leading-6 md:text-xl w-full pt-8 md:pr-48 md:pl-48'
             >
                Here you will find some of the personal and clients projects that I created 
                with each project containing its details
              </p>
        </div>
      </section>
    </Element>
  )
}

export default project