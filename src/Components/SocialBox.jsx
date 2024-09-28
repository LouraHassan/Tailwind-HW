import React from 'react'

function SocialBox(props) {
  return (
    <div>
          <img className='w-[30px]' src={props.icon} alt="icon" />
          <p className='text-3xl font-Fraunces font-semibold my-3 text-[#131516]'>{props.num}</p>
          <p className='font-Montserrat text-xs font-semibold text-[#707c84]'>{props.text}</p>
    </div>
  )
}

export default SocialBox
