import React from 'react'

export default function ButtonRound({ as="button", children, onClick, className = '', ... props }) {
  const Element = as;
  return (
      <Element 
        onClick={onClick}
        className={`bg-[#0E100F] text-white py-1.5 px-3 rounded-4xl font-medium border-2 border-[#FEFBE0] hover:bg-[#FEFBE0] hover:text-black transition-colors duration-300 ${className}`}
        {...props}
        >
            {children}
      </Element>
  )
}
