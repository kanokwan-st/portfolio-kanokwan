import React from 'react'

export default function Button({ as="button", children, onClick, className = '', ... props }) {
  const Element = as;
  return (
      <Element
        onClick={onClick}
        className={`relative overflow-hidden bg-[#0E100F] text-white py-2 px-4 rounded font-medium border-2 border-[#FEFBE0] cursor-pointer group hover:text-black ${className}`}
        {...props}
        >
          <span className='relative z-10'>{children}</span>
          <span className='absolute inset-0 bg-[#FEFBE0] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0'></span>  
      </Element>
  )
}
