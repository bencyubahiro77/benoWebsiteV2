import React from 'react'

const copyright : React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='text-center bg-[#111] text-sm tracking-wider p-2 text-white'>
    Built by <span className='underline font-bold'>Benjamin CYUBAHIRO</span> {currentYear}
   </div>
  )
}

export default copyright