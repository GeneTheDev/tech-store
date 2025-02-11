'use client'

import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'>
      <div>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>Welcome to Our Website</h1>
        <p className='mt-4 text-lg text-gray-700 dark:text-gray-300'>This is a simple hero section with a title and a description.</p>
      </div>
    </div>
  )
}

export default Hero;
