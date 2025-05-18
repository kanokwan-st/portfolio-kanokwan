import React from 'react'

export default function Button({ as="button", children, onClick, className = '', ... props }) {
  const Element = as;

  return (
      <Element
        onClick={onClick}
        className={`bg-[#0E100F] text-white py-2 px-4 rounded font-medium border-2 border-[#FEFBE0] cursor-pointer hover:bg-[#FEFBE0] hover:text-black ${className}`}
        {...props}
        >
            {children}
      </Element>
  )
}
