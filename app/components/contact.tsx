'use client';
import React, { useState } from 'react';
import Text from './reusables/text';
import { CgMail } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_2u61kij', 'template_w8vw4aj', templateParams, '19vCpCEkdleFIvUxK')
      .then((response) => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error);
        alert('Error sending message. Please try again later.');
      });
  };

  return (
    <div className='bg-eerie py-40 w-full items-center'>
      <Text>Contact Me</Text>
      <p className='px-[15%] py-10'>
        Feel free to reach out if you have any questions or opportunities for collaboration. I&apos;m always open to discussing new projects, ideas, or ways we can work together to achieve your goals. Your feedback and inquiries are important to me, and I&apos;ll do my best to get back to you promptly.
      </p>
      <section className='flex px-[5%]'>
        <div className='flex flex-1 flex-col'>
          <section>
            <div className='flex'>
              <CgMail size={30} />
              <div className='text-left ml-4 text-base'>
                <p>Have a question?</p>
                <p className='my-3'>I am here to help</p>
                <p className='text-grullo'>Email Me at trishalakohade4@gmail.com</p>
              </div>
            </div>
          </section>
          <section>
            <div className='flex mt-10'>
              <CiLocationOn size={30} />
              <div className='text-left ml-4 text-base'>
                <p>Current Location</p>
                <p className='my-3'>Bhopal, India</p>
                <p className='text-grullo'>Building Scalable Innovations</p>
              </div>
            </div>
          </section>
        </div>
        <div className='flex flex-1 flex-col'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-charcoal h-12 p-2 rounded-sm w-[90%] mb-8'
          />
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-charcoal h-12 p-2 rounded-sm w-[90%] mb-8'
          />
          <input
            type='text'
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='bg-charcoal h-12 p-2 rounded-sm w-[90%] mb-8'
          />
          <textarea
            rows={6}
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-charcoal p-2 rounded-sm w-[90%] mb-8 min-h-12'
          />
          <button
            onClick={handleSend}
            className='bg-umber text-lg px-10 py-2 my-4 rounded-md self-start'
          >
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
