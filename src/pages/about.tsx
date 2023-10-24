import React from 'react'
import { Element } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaFigma, FaReact, FaNodeJs, FaJs} from 'react-icons/fa';

const about = () => {
  return (
    <Element name="about">
       <section id="about">
           <div className='w-full pt-16'>
             <h4 className='text-center font-bold text-4xl tracking-wider'>ABOUT ME</h4>
             <p 
               className='text-center leading-6 md:text-xl w-full pt-8 pl-4 pr-4 md:pr-48 md:pl-48'
             >
                Here you will find more information about me, what I do, and my current skills
                mostly in terms of programming and technology
             </p>

             <div className='w-full justify-center flex items-center'>
                <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt548d935410bb24b8/60dacd0996e07e0f6e50b0c3/e1bcc3a821bfff285d68586b8ae436ffc75b5f95.jpg?auto=webp&format=pjpg&width=3840&quality=60' alt='' className='rounded-full mt-8 flex h-72 w-72 object-cover' />
             </div>

             <div className='lg:flex pt-8 md:pr-24 md:pl-24 pr-4 pl-4 m-2'>
                <div className='lg:w-1/2'>
                    <p
                     className='text-lg leading-6 pt-4 font-normal'
                    >
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. 
                        <br />
                        <br />
                       I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or 
                       Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                        <br />
                        <br />
                       I'm open to Job opportunities where I can contribute, learn and grow. If you have
                       a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                </div>

                <div className='lg:w-1/2 pt-4 md:ml-12 grid grid-cols-4 gap-2'>
                    <div>
                       <FaCss3Alt className='h-16 w-16' style={{ color: '#2965F1' }}/>
                      
                    </div>
                    <div>
                        <FaHtml5 className='h-16 w-20'  style={{ color: '#E34C26' }}/>
                       
                    </div>
                    <div>
                        <FaJs className='h-16 w-16'  style={{ color: 'yellow' }}/>
                      
                    </div>
                    <div>
                       <FaFigma className='h-16 w-16' style={{ color: '#F24E1E' }}/>
                     
                    </div>
                    <div>
                        <FaReact className='h-16 w-16' style={{ color: '#61DBFB' }}/>
                      
                    </div>
                    <div>
                        <FaNodeJs className='h-16 w-16' style={{ color: '#339933' }}/>
                       
                    </div>
                </div>
             </div>
           </div>
        </section>
    </Element>
  )
}

export default about