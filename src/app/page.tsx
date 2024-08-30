import Image from 'next/image'
import moneyTree from '/public/moneyTree.png'
import MissionCard from "./MissionCard"; 
import EcmCard from "./EcmCard";
import YouTubeEmbed from './YouTubeEmbed';
import rightArrow from '/public/rightArrow.svg'
import Logo from '/public/Logo.svg'
import Youtube from '/public/Youtube.svg';
import Instagram from '/public/Instagram.svg';
import Linkedin from '/public/Linkedin.svg';
import tiktok from '/public/tiktok.svg';


export default function Home() {
  return (
    <>
     <div className="px-6 py-10 flex flex-col justify-around my-10 bg-gradient-to-b from-white to-light-green">
        <div className="text-3xl my-4">
          Empowering the Next Generation of Business Leaders
        </div>
         
        <div>
          At the Green Portfolio Project, we are dedicated to equipping high school and college students with essential business development skills.
        </div>

       <div className="my-10 flex items-center space-x-4 flex-none">
          <button className="bg-black text-white px-7 py-2 rounded-lg">Get Started</button>
          <div className="flex items-center">
              <button className="mr-2">Learn More</button>
                <Image className="" src={rightArrow} alt="Right Arrow SVG" />
          </div>
       </div>

        <Image
            src={moneyTree}
            alt="Green Portfolio Tree Logo"
            width={500}
            height={500}
        />
            <a href="" className='flex justify-center motion-safe:animate-float md:col-span-4 lg:col-span-12 '><svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
      </div>

      {/*      {/* Mission and Story Section */}
     <div>

       {/* Title */}
       <div className="text-3xl sm:text-4xl lg:text-5xl tracking-widest text-center px-2 font-bold">
       Our Story & Mission
       </div>

       {/* Description */}
       <div className= "text-center py-5 md:py-7 2xl:py-10 px-7 sm:px-28 2xl:px-64 text-lg lg:text-xl">
        Welcome to the Green Portfolio Project (GPP), a student-led nonprofit
        organization committed to empowering the next generation of youth with
        the skills they need to succeed in the business world. Our mission is
        to provide accessible and comprehensive education in business development,
        social media marketing, personal finance, and more.
     </div>


   {/* Embedded Video Background & aligning */}
   <div className="bg-gradient-to-b from-white to-green-100 flex justify-center items-center">

  {/* Embeded Video component */}
   <YouTubeEmbed videoId="9VlvbpXwLJs" />

   </div>

   {/* Mission cards Background & aligning*/}
   <div className="flex justify-center 2xl:justify-evenly bg-gradient-to-b from-green-100 to-green-400">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-16 pb-24 md:w-11/12 lg:w-full xl:w-11/12 2xl:w-10/12">

  {/* Individial Mission Card Components */}
  <MissionCard 
             title="Free and Accessible" 
             description="All courses, resources, and community access are free." 
             linkHref="#" 
             imageUrl="/leaf.png"
             size={25}

           />

           <MissionCard 
             title="Student-Led and Focused"   
             description="Set and track goals with manageable task breakdowns." 
             linkHref="#" 
             imageUrl="/target.png"
             size={25}

           />

           <MissionCard 
             title="Secure data encryption" 
             description="Ensure your data's safety with top-tier encryption." 
             linkHref="#" 
             imageUrl="/bookIcon.png"
             size={30}
           />

           <MissionCard 
             title="Customizable notifications" 
             description="Our community is here to support you every step of the way." 
             linkHref="#" 
             imageUrl="/hands.png"
             size={33}

           />
   </div>
 </div>

      

       {/* Education Comunity membership Section */}
     <section className="py-10">

       {/* Title Text */}
     <div className="text-3xl sm:text-4xl lg:text-5xl tracking-widest text-center px-2 font-bold">
       Education, Community, <br></br>and Mentorship</div>

     {/* Description Text */}
         <div className= "text-center py-5 2xl:py-10 px-7 sm:px-28 lg:px-64 2xl:px-96 text-lg lg:text-xl ">
           Empower your journey with comprehensive learning, a supportive network, and personalized guidance to achieve your goals.
         </div>

   {/* ECM cards Background & aligning*/}
   <div className="flex justify-center">
   <div className="grid grid-cols-1 sm:grid-cols-2 w-10/12 sm:w-11/12 xl:w-8/12 2xl:w-7/12  lg:w-10/12 sm:gap-5 lg:gap-10 xl:gap-14 2xl:gap-28 lg:py-10">

   {/* ECM CardComponents */}
     <EcmCard 
       title="Courses and Tutorials"
       description="Master essential business skills with our courses. Learn social media marketing and personal finance through practical tutorials" 
       imageUrl="/courses.png"
     />

     <EcmCard 
       title="Vibrant Online Community" 
       description="Join peers to collaborate, share resources, and build a network of future leaders in our supportive community." 
       imageUrl="/community.png"
     />

     <EcmCard 
       title="Extensive Resource Library" 
       description="Explore scholarships, study abroad programs, and more in our curated resource library to further your education and career."
       imageUrl="/books.png"
     />

     <EcmCard
       title="Hands On Experience"
       description="Master essential business skills with our courses. Learn social media marketing and personal finance through practical tutorials" 
       imageUrl="/sprout.png"
     />
   </div>
 </div>
     </section>
     

     {/* Sign up section */}
     <section className="py-20 text-center space-y-10">

    <p className="text-5xl font-bold ">
      Sign up for <br className =" sm:hidden" />free today
    </p>

    <p className="text-lg sm:text-xl">
    Empowering students with free courses and a vibrant community<br className= "hidden sm:block"></br> to thrive in business. Join us and build your future today!
    </p>

    <div className="flex justify-center gap-4"> 
      {/* gradient background */}
      <button className="bg-black text-white py-2 px-4 rounded-lg">Sign Up</button>
      <button className=" text-lg flex items-center text-black gap-2">
        Learn more
        <Image className="w-7" src={rightArrow} alt="Right Arrow SVG" />
      </button>

      </div>

    </section>


    {/* Footer section */}
     <section className = "bg-black gap-10 py-10 px-10 2xl:px-36 text-center flex flex-col sm:flex-row  text-white ">
      <div className = "flex flex-col gap-7">
      
      
        {/* Logo */}
        <Image className="w-12 2xl:w-14 rounded-2xl shadow-md shadow-green-500" src={Logo} alt="Logo SVG" />
    
        <p className = "text-sky-200 text-start text-lg 2xl:text-2xl sm:text-base">
        Empowering the Next Generation of <br className = "hidden md:block"/> Business Leaders
        </p>

        <div className = "flex flex-row gap-5 sm:pt-20">
          {/* LINK 1 */}
        <a href="https://www.youtube.com/watch?v=9VlvbpXwLJs&t=3616s" target="_blank" rel="noopener noreferrer">
       <Image className="w-10 2xl:w-12" src={Youtube} alt="Youtube SVG" />
       </a>

        {/* LINK 2 */}
       <a href="https://www.instagram.com/green_portfolio_project?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
      <Image className="w-8 2xl:w-10" src={Instagram} alt="Instagram SVG" />
      </a>

       {/* LINK 3 */}
      <a href="https://www.linkedin.com/company/green-portfolio-project/" target="_blank" rel="noopener noreferrer">
      <Image className="w-8 2xl:w-10" src={Linkedin} alt="LinkedIn SVG" />
      </a>

       {/* LINK 4 */}
      <a href="https://www.tiktok.com/@greenportfolioproject1?_t=8pIWxByNnCQ&_r=1" target="_blank" rel="noopener noreferrer">
      <Image className="w-8 2xl:w-10" src={tiktok} alt="TikTok SVG" />
       </a>
           </div>
        </div>

        
<div className="pl-1 text-start sm:ml-auto">
<ul className="flex flex-col sm:flex-row gap-5 lg:gap-20 2xl:gap-36 2xl:text-lg">
    <li>
      Product
      <ul className="text-gray-500 pt-4 space-y-4">
        <li><a href="#" target="_blank" rel="noopener noreferrer">Features</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Integrations</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Updates</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">FAQ</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Pricing</a></li>
      </ul>
    </li>
    
    <li>
      Company
      <ul className="text-gray-500 pt-4 space-y-4">
        <li><a href="#" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Careers</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Manifesto</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Press</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Contact</a></li>
      </ul>
    </li>

    <li>
      Resources
      <ul className="text-gray-500 pt-4 space-y-4">
        <li><a href="#" target="_blank" rel="noopener noreferrer">Examples</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Community</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Guides</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Docs</a></li>
      </ul>
    </li>

    <li>
      Legal
      <ul className="text-gray-500 pt-4 space-y-4">
        <li><a href="#" target="_blank" rel="noopener noreferrer">Privacy</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Terms</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Security</a></li>
      </ul>
    </li>
  </ul>
</div>
     </section>

     </div>   
    </>
  );
}
