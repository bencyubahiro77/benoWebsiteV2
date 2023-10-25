import React, { useRef, useState, FormEvent } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Element } from 'react-scroll';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null); 
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(form.current!); 

    setIsSending(true);

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`, formData);

      setIsSending(false);
      form.current!.reset(); 
      showSuccessMessage();
    } catch (error) {
      console.error(error);
      setIsSending(false);
      showErrorMessage();
    }
  };

  const showSuccessMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: 'Your message has been sent successfully!',
    });
  };

  const showErrorMessage = () => {
    Swal.fire({
      icon: 'error',
      title: 'Message Not Sent',
      text: 'An error occurred while sending the message. Please try again later.',
    });
  };

  return (
    <Element name='contact'>
      <section id="contact">
        <div className='w-full pt-16 bg-slate-50 pb-16'>
          <h4 className='text-center font-bold text-4xl tracking-wider'>CONTACT</h4>
          <p
            className='text-center leading-6 md:text-xl text-lg w-full pt-8 pl-2 pr-2 lg:pr-48 lg:pl-48'
          >
            Feel free to Contact me by submitting the form below, and I will get back
            to you as soon as possible.
          </p>
          <div className='flex justify-center items-center'>
            <form
              className='pt-8 xl:w-7/12 w-11/12 cont'
              onSubmit={handleSubmit}
              ref={form} 
            >
              <div className='w-full'>
                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='name'>
                  Name
                </label>
                <input
                  className='shadow appearance-none bg-[#f0f0f0] border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='w-full'>
                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='email'>
                  Phone
                </label>
                <input
                  className='shadow appearance-none bg-[#f0f0f0] h-12 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='phone'
                  type='text'
                  name='phone'
                  placeholder='Phone number'
                  required
                />
              </div>
              <div className='w-full'>
                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='email'>
                  Email
                </label>
                <input
                  className='shadow appearance-none bg-[#f0f0f0] h-12 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='w-full'>
                <label className='block text-gray-700 text-sm font-bold m-2' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='shadow appearance-none bg-[#f0f0f0] h-40 resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='message'
                  name='message'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <div className='w-full mt-2 flex lg:justify-end items-center justify-center'>
                <input
                  className='bg-[#170e7d] cursor-pointer tracking-wider hover:bg-blue-500 text-white font-bold py-2 px-4 w-36 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                  value={isSending ? 'Sending...' : 'SUBMIT'} 
                  disabled={isSending}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;