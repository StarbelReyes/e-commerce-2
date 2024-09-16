import React from 'react'

const Title = ({text1,text2}) => {
  return (
<div className='inline-flex gap-3 items-center mb-4'>
  <p className='text-blue-600 font-semibold text-sm sm:text-base'>
    {text1} <span className='text-gray-800 font-medium'>{text2}</span>
  </p>
  <div className='flex-grow w-10 sm:w-14 h-[2px] sm:h-[3px] bg-gray-800'></div>
</div>
  )
}

export default Title