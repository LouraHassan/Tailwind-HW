import React from 'react'
import Nav from '../Components/Nav';
import SocialBox from '../Components/SocialBox';
import youtube from "../assets/brand-youtube.png";
import insta from "../assets/brand-instagram.png";
import wifi from "../assets/wifi.png";
import CompanyImg from '../Components/CompanyImg';
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import Footer from '../Components/Footer';
import header from "../assets/headerImage.jpg";
import aboutImg from '../assets/aboutImg.jpg'
import InviteBox from '../Components/InviteBox';
function About() {
  return (
      <div>
           <div className="w-100 relative flex flex-col items-center justify-center">
          <div className="z-10 w-full ">
                  <div className="w-[40%] max-md:w-[70%] max-sm:w-[80%] absolute right-0 max-sm:right-[10%] max-sm:top-[10%]">
                      <img src={aboutImg} alt="" />
             
            </div>
          </div>
          <Nav className=""></Nav>
          
          <div className=" w-[80vw] z-10 flex justify-between items-start max-md:w-[90vw] max-md:flex-col-reverse max-md:items-end max-sm:px-2">
            <div>
              <div className=" flex flex-col justify-evenly items-start w-[40vw] max-md:w-[80vw]">
               
                <p className="text-6xl font-Fraunces font-bold max-md:text-5xl max-sm:text-[160%] text-[#131516]">
                 About Me
                </p>
              
                <p className="text-[#707c84] text-[100%] font-Montserrat">
                Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
                </p>
               
              </div>
            
            <div className="my-20 flex w-[30vw] justify-between max-md:w-[75vw] max-sm:my-10">
              <SocialBox
                icon={youtube}
                num="1.2M+"
                text="SUBSCRIBERS"
              ></SocialBox>
              <SocialBox
                icon={insta}
                num="1.8M+"
                text="FOLLOWERS"
              ></SocialBox>
              <SocialBox icon={wifi} num="800K+" text="READERS"></SocialBox>
            </div>
                  </div>
            <div className="w-[80%] h-[60vh] max-md:w-[75%] max-sm:w-full max-md:h-[120vh] max-sm:h-[90vh]">
             
              </div>
              </div>
          </div>
          <div className="w-full flex justify-center">
        <div className="flex w-[80vw]  justify-around max-md:flex-col z-10 bg-white">
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
          <div className="w-full flex flex-col items-center my-20">
            <p className="uppercase tracking-widest text-[#131516] font-bold text-xs">
              as featured in
            </p>
            <div className="w-[80vw] flex justify-around max-md:flex-wrap max-sm:flex-wrap">
              <CompanyImg img={c1}></CompanyImg>
              <CompanyImg img={c2}></CompanyImg>
              <CompanyImg img={c3}></CompanyImg>
              <CompanyImg img={c4}></CompanyImg>
              <CompanyImg img={c5}></CompanyImg>
            </div>
          </div>
          <InviteBox></InviteBox>
          <Footer></Footer>
    </div>
  )
}

export default About
