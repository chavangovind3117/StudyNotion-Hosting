import React from 'react'

const HighlightText = ({ text }) => {
  return (
    <span className='font-bold bg-gradient-to-br from-blue-200 via-cyan-100 to-caribbeangreen-50 text-transparent bg-clip-text'>
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
