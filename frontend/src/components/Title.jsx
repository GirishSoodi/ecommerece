import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-6 items-center mb-4'>
      <h2 className='text-2xl sm:text-3xl text-gray-500'>
        {text1}
        <span className='text-gray-700 font-semibold'> {text2}</span>
      </h2>
      <div className='w-10 sm:w-16 h-[2px] bg-gray-700'></div>
    </div>
  )
}

export default Title
