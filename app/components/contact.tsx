'use client';
import React, { useState } from 'react';
import Text from './reusables/text';
import { CgMail } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone, FiDownload, FiSend, FiCheck, FiLinkedin, FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setIsSending(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject || 'Portfolio Contact Inquiry',
      message: message,
    };

    emailjs.send('service_2u61kij', 'template_w8vw4aj', templateParams, '19vCpCEkdleFIvUxK')
      .then(() => {
        setIsSending(false);
        setSentSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setSentSuccess(false), 5000);
      })
      .catch((error) => {
        console.error(error);
        setIsSending(false);
        alert('There was an issue sending your message. You can also directly email Trishlakohade4@gmail.com');
      });
  };

  const downloadResume = () => {
    const resumeUrl = '/Trishla_Kohade_FE.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Trishla_Kohade_FE.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-[#141312] py-28 md:py-36 w-full border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-6 md:px-[8%]'>
        <div className='text-center mb-16'>
          <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
            Get In Touch
          </span>
          <div className='mt-2'>
            <Text>Contact Me</Text>
          </div>
          <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
            Available for impactful engineering roles, technical consulting, and innovative product collaborations.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-left'>
          {/* Left Column: Direct Info */}
          <div className='lg:col-span-5 flex flex-col justify-between space-y-8'>
            <div className='space-y-6'>
              {/* Email */}
              <div className='flex items-start gap-4 p-5 rounded-2xl bg-raisin/70 border border-white/5 hover:border-grullo/40 transition-colors'>
                <div className='p-3 rounded-xl bg-grullo/10 text-grullo'>
                  <CgMail size={26} />
                </div>
                <div>
                  <p className='text-xs uppercase tracking-wider text-neutral-400 font-medium'>Direct Email</p>
                  <a
                    href='mailto:trishlakohade4@gmail.com'
                    className='text-base font-semibold text-white hover:text-grullo transition-colors mt-0.5 block'
                  >
                    trishlakohade4@gmail.com
                  </a>
                  <p className='text-xs text-grullo mt-1'>Replies within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4 p-5 rounded-2xl bg-raisin/70 border border-white/5 hover:border-grullo/40 transition-colors'>
                <div className='p-3 rounded-xl bg-grullo/10 text-grullo'>
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className='text-xs uppercase tracking-wider text-neutral-400 font-medium'>Phone / WhatsApp</p>
                  <a
                    href='tel:+917389178436'
                    className='text-base font-semibold text-white hover:text-grullo transition-colors mt-0.5 block'
                  >
                    +91 7389178436
                  </a>
                  <p className='text-xs text-neutral-400 mt-1'>Available on WhatsApp & Calls</p>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-start gap-4 p-5 rounded-2xl bg-raisin/70 border border-white/5 hover:border-grullo/40 transition-colors'>
                <div className='p-3 rounded-xl bg-grullo/10 text-grullo'>
                  <CiLocationOn size={26} />
                </div>
                <div>
                  <p className='text-xs uppercase tracking-wider text-neutral-400 font-medium'>Current Location</p>
                  <p className='text-base font-semibold text-white mt-0.5'>Delhi, India</p>
                  <p className='text-xs text-neutral-400 mt-1'>Open to Hybrid & Remote opportunities</p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Resume */}
            <div className='p-6 rounded-2xl bg-gradient-to-r from-raisin to-eerie border border-grullo/30'>
              <h4 className='text-base font-bold text-white mb-2'>Looking for my updated CV?</h4>
              <p className='text-xs text-neutral-400 mb-4'>
                Download my full engineering resume formatted with all project metrics and experience.
              </p>
              <button
                onClick={downloadResume}
                className='flex items-center gap-2 bg-gradient-to-r from-umber to-[#74624d] hover:brightness-110 text-white text-xs font-semibold px-5 py-2.5 rounded-full border border-grullo/40 transition-all'
              >
                <FiDownload size={14} />
                <span>Download Trishla_Kohade_FE.pdf</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='lg:col-span-7 bg-raisin/80 border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm'>
            <h3 className='text-2xl font-bold text-white mb-6'>Send Me a Message</h3>

            {sentSuccess && (
              <div className='mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2'>
                <FiCheck size={18} />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSend} className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label className='block text-xs font-medium text-neutral-300 mb-2'>Your Name *</label>
                  <input
                    type='text'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='w-full bg-black/50 border border-neutral-700 focus:border-grullo focus:ring-1 focus:ring-grullo text-white text-sm rounded-xl px-4 py-3 outline-none transition-all'
                  />
                </div>

                <div>
                  <label className='block text-xs font-medium text-neutral-300 mb-2'>Your Email *</label>
                  <input
                    type='email'
                    placeholder='john@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full bg-black/50 border border-neutral-700 focus:border-grullo focus:ring-1 focus:ring-grullo text-white text-sm rounded-xl px-4 py-3 outline-none transition-all'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-medium text-neutral-300 mb-2'>Subject</label>
                <input
                  type='text'
                  placeholder='Opportunity / Consultation / Project Inquiry'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='w-full bg-black/50 border border-neutral-700 focus:border-grullo focus:ring-1 focus:ring-grullo text-white text-sm rounded-xl px-4 py-3 outline-none transition-all'
                />
              </div>

              <div>
                <label className='block text-xs font-medium text-neutral-300 mb-2'>Message *</label>
                <textarea
                  rows={5}
                  placeholder='Tell me about your team, product, or challenge...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className='w-full bg-black/50 border border-neutral-700 focus:border-grullo focus:ring-1 focus:ring-grullo text-white text-sm rounded-xl px-4 py-3 outline-none transition-all resize-y'
                />
              </div>

              <button
                type='submit'
                disabled={isSending}
                className='flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-umber to-[#74624d] hover:brightness-110 disabled:opacity-50 text-white font-semibold px-8 py-3.5 rounded-full border border-grullo/40 shadow-lg shadow-black/40 transition-all duration-300'
              >
                {isSending ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiSend size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
