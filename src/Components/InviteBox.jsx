import React from 'react'

function InviteBox() {
  return (
    <div className="flex flex-col items-center bg-[#BE7C68] p-20 max-md:px-10">
          <p className="text-5xl font-Fraunces text-center text-white font-bold max-md:text-4xl max-sm:text-2xl">
            Invite me to your restaurant. <br />
            Get exposure of millions food lovers.
          </p>
          <p className="text-lg text-center text-white my-5 max-md:text-sm tracking-wider font-Montserrat">
            Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing
            integer <br /> amet eget blandit phasellus est natoque blandit
            facilisi eleifend.
          </p>
          <button className="text-xs font-Montserrat px-5 py-3 font-bold border-2  bg-[white] text-[#BE7C68] hover:bg-[#BE7C68] border-white hover:text-white transition duration-150  hover:ease-in tracking-widest">
            LET'S TALK
          </button>
        </div>
  )
}

export default InviteBox
