import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './../styles/contact.css'

function Contact() {

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
}
  return (
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>
      <div className=' min-h-screen relative'>
        <ToastContainer limit={1} />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-4xl mt-6 sm:text-3xl font-bold title-font text-orange-400 md:text-5xl">
            Get in Touch !!
          </h1>
        </div>
        <section className="body-font relative " id="contact">
          <div className="container px-5 mt-6 lg:mt-8 lg:pt-8 pt-4 pb-10 mx-auto h-full flex max-[1000px]:flex-col sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 custom custom2 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0 grayscale-0 opacity-70"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Administrative Building, IIT Bhubaneswar, Jatni&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{
                  filter: "contrast(1.2)",
                }}
              ></iframe>

              <div className="bg-white text-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Indian Institute of Technology Bhubaneswar, Arugul, Odisha,
                    India, PIN-752050
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:secyfebs.sg@iitbbs.ac.in"
                    className="text-green-500 leading-relaxed"
                  >
                    secyfebs.sg@iitbbs.ac.in
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className=" w-full h-16 bottom-0"></div>
        </section>

      </div>
    </motion.div>
  );
}

export default Contact;
