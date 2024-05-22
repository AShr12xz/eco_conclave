import React from 'react'
import CountUp from 'react-countup'
// import {motion, useAnimationControls} from 'framer-motion'
import logo from './../assets/Economics Conclave.png'

function Hero() {
  return (
    <div >
      <div className="mt-20 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="relative ms-4 mb-6 flex justify-center lg:justify-start">
            <img className="w-full h-auto max-w-lg rounded-md" src={logo} alt="Description" />
          </div>
          <div className="sm:mt-32 md:mt-24 lg:mt-0 text-center">
            <h1 className="block text-4xl font-bold text-white sm:text-6xl lg:text-6xl lg:leading-tight">
              Welcome to the <span className='text-[#96b33f]'>Economics Conclave</span> of <span className="text-orange-400">IIT BHUBANESWAR</span>
            </h1>
          </div>
        </div>
    
        <div className="mt-16 lg:mt-24 grid lg:gap-32 gap-8 text-center md:grid-cols-2 lg:grid-cols-2">
          <div className=" bg-gray-900 p-6 rounded-3xl">
            <CountUp end={10} suffix='+' duration={1.25} className="text-5xl font-bold text-white" />
            <p className="mt-2 text-lg text-gray-300">Events</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-3xl">
            <CountUp end={250} suffix='+' duration={1.5} className="text-5xl font-bold text-white" />
            <p className="mt-2 text-lg text-gray-300">Impressions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
