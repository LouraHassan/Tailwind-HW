import Nav from './Components/Nav'
import CompanyImg from './Components/CompanyImg'
import SocialBox from './Components/SocialBox'
import FoodCard from './Components/FoodCard'
import VideoCard from './Components/VideoCard'
import Footer from './Components/Footer'
import youtube from './assets/brand-youtube.png'
import insta from './assets/brand-instagram.png'
import wifi from './assets/wifi.png'
import c1 from './assets/c1.svg'
import c2 from './assets/c2.svg'
import c3 from './assets/c3.svg'
import c4 from './assets/c4.svg'
import c5 from './assets/c5.svg'
import header from './assets/headerImage.jpg'
import mail from './assets/mailImage.jpg'
import food1 from './assets/food-blogger-latest-review-img-1.jpg'
import food2 from './assets/food-blogger-latest-review-img-2.jpg'
import food3 from './assets/food-blogger-latest-review-img-3.jpg'
import food4 from './assets/food-blogger-best-restaurant-1.jpg'
import food5 from './assets/food-blogger-best-restaurant-2.jpg'
import food6 from './assets/food-blogger-best-restaurant-3.jpg'
import food7 from './assets/food-blogger-best-restaurant-4.jpg'
import food8 from './assets/food-blogger-best-restaurant-5.jpg'
import food9 from './assets/food-blogger-best-restaurant-6.jpg'
import vid2 from './assets/food-blogger-latest-video-2.jpg'
import vid3 from './assets/food-blogger-latest-video-3.jpg'
import vid4 from './assets/food-blogger-latest-video-4.jpg'
import vid5 from './assets/food-blogger-latest-video-5.jpg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function App() {

  return (
    <> <div id='main'>
      <div className='w-100 relative flex flex-col items-center justify-center'>
      <div className='z-10 w-full '>
          <div className='w-[40%] max-md:w-[30%] max-sm:w-[30%] absolute right-0'>

        <div className='bg-[#C99484] h-[45vh] max-md:h-[45vh] max-sm:h-[25vh]'></div>
        <div className='bg-[#CD9D8F] h-[45vh] max-md:h-[45vh] max-sm:h-[25vh]'></div>
        <div className='bg-[#D2A79B] h-[45vh] max-md:h-[45vh] max-sm:h-[25vh]'></div>
          </div>
        </div>
        <Nav className=''></Nav>
        <div></div>
        <div className=' w-[80vw] z-10 flex justify-between items-start max-md:w-[90vw] max-md:flex-col-reverse max-md:items-end max-sm:px-2'>
          <div>

          <div className=' flex flex-col justify-evenly items-start h-[60vh]'>
            
            <p className='text-xl flex items-center text-[#D2A79B] text-sm'> <span className='w-14 h-[0.2vh] bg-[#D2A79B] mx-2'></span> welcome</p>
            <p className='text-6xl font-Fraunces font-bold max-md:text-5xl max-sm:text-[160%] text-[#131516]'>I’m Dianna Adams</p>
            <p className='text-4xl font-Fraunces font-semibold max-md:text-2xl max-sm:text-[120%] text-[#131516]'>Food Critic / Influencer / Blogger</p>
            <p className='text-[#707c84] text-[100%] font-Montserrat'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
            <button className='font-Montserrat border-2 text-xs px-10 py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest'>JOIN INSIDER</button>
         
            </div>

            <div className='my-20 flex w-[30vw] justify-between max-md:w-[75vw] max-sm:my-10'>
              <SocialBox icon={youtube} num='1.2M+' text='SUBSCRIBERS'></SocialBox>
              <SocialBox icon={insta} num='1.8M+' text='FOLLOWERS'></SocialBox>
              <SocialBox icon={wifi} num='800K+' text='READERS'></SocialBox>

            </div>
          </div>
        <div className='w-[80%] max-md:w-[75%] max-sm:w-full'>
            <img className='w-[100%]' src={header} alt="" />
        </div>
      
</div>

    </div>
      <div className='flex flex-col items-center py-10'>
        <div className='w-full flex flex-col items-center my-20'>
        <p className='uppercase tracking-widest text-[#131516] font-bold text-xs'>as featured in</p>
        <div className='w-[80vw] flex justify-around max-md:flex-wrap max-sm:flex-wrap'>
          <CompanyImg img={c1}></CompanyImg>
          <CompanyImg img={c2}></CompanyImg>
          <CompanyImg img={c3}></CompanyImg>
          <CompanyImg img={c4}></CompanyImg>
          <CompanyImg img={c5}></CompanyImg>

        </div>
      </div>
        <div className='flex justify-between w-[80vw] my-10 items-center max-md:flex-col'>
          <p className='text-5xl font-bold max-md:text-4xl font-Fraunces max-sm:text-2xl text-[#131516]'>Latest Reviews</p>
          <button className='font-Montserrat border-2 text-xs px-10 py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest max-md:px-6 max-md:my-5'>VIEW ALL</button>
        </div>
        <div className='grid grid-cols-3  w-[80vw] gap-10 my-10 max-md:grid-cols-1 max-md:w-[90vw] max-sm:grid-cols-1 max-md:my-0'>
      <FoodCard img={food1} title='Grilled Flank Steak with Chimichurri' text='Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.' review={true}></FoodCard>
      <FoodCard img={food2} title='Mushroom Penne with Walnut Pesto' text='Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.' review={true}></FoodCard>
      <FoodCard img={food3} title='Garlic Butter White Wine Shrimp Linguine' text='Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.' review={true}></FoodCard>

        </div>
      </div>
      <div className='w-full flex flex-col items-center bg-[#F3EFEE] py-10'>
        <div className='w-[80vw] flex flex-col items-center my-10 max-md:w-[90vw]'>
          <p className='text-6xl text-center font-Fraunces font-bold max-md:text-4xl max-sm:text-2xl text-[#131516]'>Best in Class Restaurant</p>
          <p className='w-[60vw] text-center text-lx tracking-wider	my-5 max-sm:text-sm font-Montserrat'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
        </div>
        <div className='w-[80vw] grid grid-cols-3 gap-10 my-10 max-md:w-[90vw] max-md:grid-cols-1 max-sm:my-5 '>
        <FoodCard img={food4} title="Bern's Steak House" text='Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.' ></FoodCard>
        <FoodCard img={food5} title='Eewak Korean Restaurant' text='Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.' ></FoodCard>
        <FoodCard img={food6} title='The Ramban Vegan House' text='Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.' ></FoodCard>
        <FoodCard img={food7} title='Maniest Bake & Cake' text='Diam lacus nunc est commodo nunc, velit et amet eu vitae sem.' ></FoodCard>
        <FoodCard img={food8} title='Crush Los Angeles' text='Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique.' ></FoodCard>
        <FoodCard img={food9} title='The Mike Winery' text='Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis.' ></FoodCard>

       
        </div>
        <div className='flex w-[90vw] justify-evenly bg-white border-8 border-gray-200 relative my-20  py-20 max-md:flex-col max-md:w-[100vw] max-md:items-center max-md:py-10'>
          <div className='relative w-[40%] max-md:w-[75%] max-md:flex max-md:justify-center max-md:min-h-[50vw] max-sm:w-[90%]'>
            <img className='absolute -top-[50%] max-md:w-full max-md:-top-[20%] max-sm:-top-[40%]' src={mail} alt="" />
          </div>
          <div className='flex flex-col w-[40vw] justify-end max-md:w-[90vw] max-sm:w-[90%]'>
            <p className='text-6xl my-5 font-Fraunces font-bold max-md:text-4xl max-sm:text-2xl max-sm:my-3 text-[#131516]'>Join Mailing List</p>
            <p className='my-5 max-md:text-xs max-sm:mb-10 font-Montserrat'>Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
            <div className='flex items-center max-sm:flex-col'>

            <input type="text" placeholder="Email Address" className="input input-bordered bg-gray-100 w-full font-Montserrat rounded-none max-sm:w-full" />
            <button className='border-2 font-Montserrat text-xs m-3 px-[5%] py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest max-md:py-4 max-sm:w-full'>SUBSCRIBE</button>
            </div>

          </div>
        </div>
        <div className='w-[80vw] max-md:w-[90vw] flex flex-col items-center'>
          <p className='text-6xl font-Fraunces font-bold max-md:text-4xl max-sm:text-2xl text-[#131516]'>Latest Videos</p>
        </div>
        <div className='w-[80vw] grid grid-cols-2 gap-10 my-10 max-md:w-[90vw] max-md:grid-cols-1'>
          <div className=" flex flex-col">
            <div className='bg-[url("./assets/vid.jpg")] w-full h-[50vh] bg-no-repeat bg-cover flex items-center justify-center max-md:h-[40vh] max-sm:h-[20vh]'>
            <FontAwesomeIcon className='text-7xl text-white hover:text-[#BE7C68] cursor-pointer' icon={faCirclePlay} />
            </div>
      <p className="text-3xl font-Fraunces font-bold my-5 max-md:text-2xl max-sm:text-xl text-[#131516]">Dianna Adams visits the Sooto Restaurant | Uncovered Miami</p>
      <p className="text-gray-500 tracking-wider font-Montserrat">A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
    
    </div>
          <div className='flex flex-col'> 
            <VideoCard img={vid2} title='Family Dinner - Latea pulvinar scelerisque diam tempus facilisi' text='Enim imperdiet fames nisl, purus et diam aliquet'></VideoCard>
            <VideoCard img={vid3} title='Lobortis turpis turpis vehicula laoreet egestas enim ornare' text='Enim imperdiet fames nisl, purus et diam aliquet'></VideoCard>

            <VideoCard img={vid4} title='Tempus quis ac viverra condimentum sit nulla viverra' text='Enim imperdiet fames nisl, purus et diam aliquet'></VideoCard>

            <VideoCard img={vid5} title='Quis mauris egestas enim urna dictum' text='Enim imperdiet fames nisl, purus et diam aliquet'></VideoCard>
            <button className='border-2 text-xs font-Montserrat px-10 py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest'>VIEW ALL VIDEOS</button>

       </div>
        </div>
      </div>
      <div className='flex flex-col items-center bg-[#BE7C68] p-20 max-md:px-10'>
        <p className='text-5xl font-Fraunces text-center text-white font-bold max-md:text-4xl max-sm:text-2xl'>Invite me to your restaurant. <br />
          Get exposure of millions food lovers.</p>
        <p className='text-lg text-center text-white my-5 max-md:text-sm tracking-wider font-Montserrat'>Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer <br /> amet eget blandit phasellus est natoque blandit facilisi eleifend.</p>
        <button className='text-xs font-Montserrat px-5 py-3 font-bold border-2  bg-[white] text-[#BE7C68] hover:bg-[#BE7C68] border-white hover:text-white transition duration-150  hover:ease-in tracking-widest'>LET'S TALK</button>
      

        </div>
    </div>
      <Footer></Footer>
    </>
  )
}

export default App

// absolute top-[30%] right-[0] max-md:top-[20%] max-md:right-[0] max-md:w-[35%] max-sm:w-[75%] max-sm:right-[5%]