import React from 'react'
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';


const project = () => {
  return (
    <Element name="projects">
      <section id="projects">
        <div className='w-full pt-16'>
             <h4 className='text-center font-bold text-4xl tracking-wider'>PROJECTS</h4>
             <p 
               className='text-center leading-6 md:text-xl text-lg w-full pt-8 pl-4 pr-4 md:pr-48 md:pl-48'
             >
                Here you will find some of the personal and clients projects that I created 
                with each project containing its details
              </p>

              <div className='grid lg:grid-cols-3 gap-0 xl:mr-28 xl:ml-28 mt-8 mb-20'>
                  <div
                    className="xl:w-[349px] h-72 rounded-lg border-[1px] m-2 box hover:-translate-y-2"
                  >
                    <div className='flex justify-between'>
                      <h4 className="mt-8 font-normal mb-2 ml-8"><FontAwesomeIcon icon={faFolder} style={{color: "#170e7d",}} className='h-8 w-8' /></h4>
                      <a href='https://brogrammersmall.netlify.app/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#170e7d",}} className='h-4 w-4 mt-10 mb-2 mr-8' />
                      </a>
                    </div>

                    <h4 className='pl-8 text-xl h-12 font-bold main-color'>Brogrammers E-commerce</h4>

                    <p className='m-4 pl-4 pr-4'>
                      This Platform which include sellers and buyers. i Contributed on this project
                      on both Front-end and Back-end
                    </p>
                   
                    <ul className="flex font-bold ml-4 pl-[14px]">
                      <li className='m-1'>Javascript</li>
                      <li className='m-1'>React</li>
                      <li className='m-1'>NodeJs</li>
                      <li className='m-1'>Redux</li>
                    </ul>
                  </div>

                  <div
                    className="xl:w-[349px] h-72 rounded-lg border-[1px] m-2 box hover:-translate-y-2"
                  >
                    <div className='flex justify-between'>
                      <h4 className="mt-8 font-normal mb-2 ml-8"><FontAwesomeIcon icon={faFolder} style={{color: "#170e7d",}} className='h-8 w-8' /></h4>
                      <a href='https://beno-tattoo.onrender.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#170e7d",}} className='h-4 w-4 mt-10 mb-2 mr-8' />
                      </a>
                    </div>

                    <h4 className='pl-8 h-12 text-xl font-bold main-color'>Beno Tattoo</h4>

                    <p className='m-4 pl-4 pr-4'>
                      I build this website for a tatoo shop which presents their services and also include 
                      booking.
                    </p>
                   
                    <ul className="flex font-bold ml-4 pl-[14px]">
                      <li className='m-1'>Javascript</li>
                      <li className='m-1'>React</li>
                      <li className='m-1'>NodeJs</li>
                    </ul>
                  </div>

                  <div
                    className="xl:w-[349px] h-72 rounded-lg border-[1px] m-2 box hover:-translate-y-2"
                  >
                    <div className='flex justify-between'>
                      <h4 className="mt-8 font-normal mb-2 ml-8"><FontAwesomeIcon icon={faFolder} style={{color: "#170e7d",}} className='h-8 w-8' /></h4>
                      <a href='https://asp.amalitech-dev.net/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#170e7d",}} className='h-4 w-4 mt-10 mb-2 mr-8' />
                      </a>
                    </div>

                    <h4 className='pl-8 text-xl h-12 font-bold main-color'>Git-Inspired Assignment submission system</h4>

                    <p className='m-4 pl-4 pr-4'>
                     I worked on this a system which allows IT students to submit assignments as front-end developer
                    </p>
                   
                    <ul className="flex font-bold ml-4 pl-[14px]">
                      <li className='m-1'>Typescript</li>
                      <li className='m-1'>React</li>
                      <li className='m-1'>NodeJs</li>
                      <li className='m-1'>Tailwind</li>
                    </ul>
                  </div>
               </div>
           </div>
         </section>
    </Element>
  )
}

export default project