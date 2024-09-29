import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactDetail(props) {
  return (
    <div className='flex my-5'>
  <FontAwesomeIcon
                  className="text-md text-[#BE7C68] px-4"
                  icon={props.icon}
                />          <div>
              <p className='font-Montserrat'>{props.title}</p>
              <p className='text-[#707c84] font-Montserrat text-2xl font-semibold max-md:text-lg'>{props.text}</p>

          </div>
    </div>
  )
}

export default ContactDetail
