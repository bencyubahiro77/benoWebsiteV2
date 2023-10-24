import React from 'react'
import { Element } from 'react-scroll';

const contact = () => {
  return (
    <Element name='contact' className='h-[120vh]'>
        <section id="contact">
            <div className='w-full pt-16 bg-stone-50'>
                <h4 className='text-center font-bold text-4xl tracking-wider'>CONTACT</h4>
                <p 
                className='text-center leading-6 md:text-xl w-full pt-8 pl-2 pr-2 lg:pr-48 lg:pl-48'
                >
                    Feel free to Contact me by submitting the form below and I will get back
                    to you as soon as possible
                </p>
                <div>
                    <form className='flex justify-center item-center' >
                        <div className='pt-8 cont lg:w-7/12 w-11/12 mb-8'>
                            <div className='w-full'>
                                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='name'>
                                    Name
                                </label>
                                <input className='shadow appearance-none bg-[#f0f0f0] border rounded w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Name' required />
                            </div>
                            <div className='w-full'>
                                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='email'>
                                    Email
                                </label>
                                <input className='shadow appearance-none bg-[#f0f0f0] h-16 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' required />
                            </div>
                            <div className='w-full'>
                                <label className='block text-gray-700 text-sm font-bold  m-2' htmlFor='email'>
                                    Message
                                </label> 
                            
                                <textarea className='shadow appearance-none bg-[#f0f0f0] h-44 resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' placeholder='Message' required>

                                </textarea>
                            </div>
                            <div className='w-full mt-2 flex lg:justify-end items-center justify-center '>
                                <button className='bg-[#170e7d] tracking-wider hover:bg-blue-500 text-white font-bold py-2 px-4 w-36 rounded focus:outline-none focus:shadow-outline' type='submit'>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </Element>
  )
}

export default contact