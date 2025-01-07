import React from 'react'
import { Element, scroller } from 'react-scroll';
import pic from '../images/beno.jpg'

const about: React.FC = () => {

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Element name="about">
      <section id="about">
        <div className='w-full pt-16'>
          <div className='w-full justify-center flex items-center'>
            <img src={pic} alt='' className='rounded-full mt-8 h-72 w-72 object-cover' />
          </div>

          <div className='lg:flex pt-8 xl:pr-24 justify-between xl:justify-evenly xl:pl-24 pr-4 pl-4 m-2'>
            <div className='lg:w-2/5'>
              <p
                className='leading-7 si pt-4 '
              >
                I'm a Frontend Web Developer building Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                <br />
                <br />
                I love sharing what I’ve learned in Web Development and encouraging others to join the dev community. Feel free to connect with me via the social media links in the footer – let’s chat about coding!
                <br />
                <br />
                I'm open to Job opportunities where I can contribute, learn and grow. If you have
                a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>

              <button
                className="bg-[#170e7d] mt-4 mb-4 md:mt-12 md:mb-12 cursor-pointer tracking-wider hover:bg-blue-500 text-white font-bold size rounded focus:outline-none focus:shadow-outline"
                onClick={scrollToContact}
              >
                Contact
              </button>

            </div>

            <div className=' pt-4 xl:ml-12 h-1/2 grid md:grid-cols-3 grid-cols-2 gap-2'>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded "
              >
                Typescript
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                Javascript
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                React
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                Nodejs
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                SAP
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                NextJs
              </button>
              <button
                className="backSkill  mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                HTML
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                CSS
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                Tailwind
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                Figma
              </button>
              <button
                className="backSkill mb-4 tracking-wider text-white font-bold h-12 w-36 rounded focus:outline-none focus:shadow-outline"
              >
                Git
              </button>

            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default about