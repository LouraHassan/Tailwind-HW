import React from "react";
import Nav from "../Components/Nav";
import SocialBox from "../Components/SocialBox";
import youtube from "../assets/brand-youtube.png";
import insta from "../assets/brand-instagram.png";
import wifi from "../assets/wifi.png";
import header from "../assets/headerImage.jpg";
import InviteBox from "../Components/InviteBox";
import Footer from "../Components/Footer";
import ContactDetail from "../Components/ContactDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="w-100 relative flex flex-col items-center justify-center">
        <div className="z-10 w-full ">
          <div className="w-[40%] max-md:w-[30%] max-sm:w-[30%] absolute right-0">
            <div className="bg-[#C99484] h-[40vh] max-md:h-[45vh] max-sm:h-[25vh]"></div>
            <div className="bg-[#CD9D8F] h-[40vh] max-md:h-[45vh] max-sm:h-[25vh]"></div>
            <div className="bg-[#D2A79B] h-[40vh] max-md:h-[45vh] max-sm:h-[25vh]"></div>
          </div>
        </div>
        <Nav className=""></Nav>
        <div></div>
        <div className=" w-[80vw] z-10 flex justify-between items-start max-md:w-[90vw] max-md:flex-col-reverse max-md:items-center max-sm:px-2">
          <div>
            <div className=" flex flex-col justify-evenly items-start w-[40vw] max-md:my-5 max-md:w-full">
              <p className="text-6xl font-Fraunces font-bold max-md:text-5xl max-sm:text-[160%] text-[#131516]">
                Contact
              </p>

              <p className="text-[#707c84] text-[100%] font-Montserrat">
                Massa urna magnis dignissim id euismod porttitor vitae etiam
                viverra at adipiscing sit morbi aliquet mauris porttitor nisi,
                senectus pharetra, ac porttitor orci.
              </p>
              <div>
                <ContactDetail
                  icon={faLocationDot}
                  title="Address"
                  text="1234 N Spring St, Los Angeles, CA 90012, United States."
                ></ContactDetail>

                <ContactDetail
                  icon={faPhone}
                  title="Phone"
                  text="+01 - 123 456 7890"
                ></ContactDetail>
                <ContactDetail
                  icon={faEnvelope}
                  title="Email"
                  text="mail@example.com"
                ></ContactDetail>
              </div>
            </div>
            <p className=" flex items-center text-[#D2A79B] text-md font-Montserrat font-semibold">
              Follow me
            </p>
            <div className="my-20 flex w-[30vw] justify-between max-md:w-[75vw] max-sm:my-10">
              <SocialBox
                icon={youtube}
                num="1.2M+"
                text="SUBSCRIBERS"
              ></SocialBox>
              <SocialBox icon={insta} num="1.8M+" text="FOLLOWERS"></SocialBox>
              <SocialBox icon={wifi} num="800K+" text="READERS"></SocialBox>
            </div>
          </div>
          <div className="w-[80%] max-md:w-[75%] max-sm:w-full bg-white flex flex-col items-start p-10 border-8 max-md:items-center">
            <p className="text-3xl font-Fraunces font-semibold ">Let's Talk</p>
            <label className="form-control p-0">
              <div className="label">
                <span className="label-text text-[#707c84] font-bold font-Montserrat">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[20vw] max-md:w-[40vw] max-sm:w-[60vw]"
              />
            </label>
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-[#707c84] font-bold font-Montserrat">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[20vw] max-md:w-[40vw] max-sm:w-[60vw]"
              />
            </label>
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-[#707c84] font-bold font-Montserrat">Subject</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[20vw] max-md:w-[40vw] max-sm:w-[60vw]"
              />
            </label>
            <label className="form-control">
              <div className="label  ">
                <span className="label-text text-[#707c84] font-bold font-Montserrat">Comment or Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-[20vw] max-md:w-[40vw] max-sm:w-[60vw]"
                placeholder="Bio"
              ></textarea>
                      </label>
                      <button className="my-3 font-Montserrat border-2 text-xs px-10 py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest">
                  Send Message
                </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-5">
        <div className="flex w-[80vw]  justify-around max-md:flex-col">
          <div>
            <img src={header} alt="" />
          </div>
          <div className="w-[30vw] flex flex-col justify-around max-md:w-full">
            <p className="text-5xl text-[#C99484]">"</p>
            <p className="text-[140%] font-bold font-Fraunces leading-10 my-5">
              Sem nibh tristique ut laoreet amet tortor eu urna, ante urna
              aliquam tellus suscipit turpis turpis volutpat sed malesuada cras
              amet, donec eget molestie ipsum semper nunc aenean sagittis
              consequat.
            </p>
            <p className="font-Montserrat my-5">Dianna Adams</p>
          </div>
        </div>
      </div>
      <InviteBox></InviteBox>
      <Footer></Footer>
    </>
  );
}

export default Contact;
