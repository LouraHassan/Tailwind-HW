import React from "react";
import logo from "../assets/food-blogger-site-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <>
      <div className="navbar bg-transparent w-full z-20 mb-24 px-32 max-md:p-6 max-sm:p-5 max-sm:mb-16">
        <div className="navbar-start">
          <img src={logo} alt="" />
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-bold tracking-widest uppercase cursor-pointer text-xs mx-5 text-gray-900 font-Montserrat">
            <li className="mx-3 text-[#BE7C68]">Home</li>
            <li className="mx-3 hover:text-[#BE7C68]">About</li>
            <li className="mx-3 hover:text-[#BE7C68]">Reviews</li>
            <li className="mx-3 hover:text-[#BE7C68]">Videos</li>
            <li className="mx-3 hover:text-[#BE7C68]">Contact</li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <div className="text-white text-lg cursor-pointer hidden lg:flex items-center">
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:opacity-80 mx-4"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:opacity-80 mx-4"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:opacity-75 mx-4"
            />
            <button className="font-Montserrat border-2 text-xs m-3 px-8 py-3 font-bold border-white text-white hover:bg-white hover:text-gray-700 transition duration-150 ease-out hover:ease-in tracking-widest">
              LET'S TALK
            </button>
          </div>
          <label
            htmlFor="navListSm"
            className="p-2 btn-ghost cursor-pointer lg:hidden bg-[#BE7C68] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="navListSm" className="modal-toggle" />
          <div className="modal z-20">
            <div className="bg-white w-full h-screen flex flex-col items-center justify-center text-2xl tracking-widest cursor-pointer font-Montserrat">
              <p className="my-6 hover:text-[#BE7C68]">Home</p>
              <p className="my-6 hover:text-[#BE7C68]">About</p>
              <p className="my-6 hover:text-[#BE7C68]">Reviews</p>
              <p className="my-6 hover:text-[#BE7C68]">Videos</p>
              <p className="my-6 hover:text-[#BE7C68]">Contact</p>

              <div className="modal-action">
                <label
                  htmlFor="navListSm"
                  className="btn btn-sm btn-circle btn-ghost absolute right-10 top-8 text-xl "
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
