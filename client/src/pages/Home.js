import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import { motion } from 'framer-motion'

function Home() {

  const variant = {
    entry: {
      opacity: [0, 1],
      transition: {
        duration: 0.125,
        times: [0, 1],
      }
    },
    exit: {
      opacity: [1, 0],
      transition: {
        duration: 0.125,
        times: [0, 1],
      }
    },
  }
  return (
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>
      <div className='min-h-screen'>
        <Hero />
        <About />
      </div>
    </motion.div>
  )
}

export default Home
