import Image from 'next/image';
import moneyTree from '/public/moneyTree.png';
import MissionCard from "./MissionCard"; 
import EcmCard from "./EcmCard";
import YouTubeEmbed from './YouTubeEmbed';
import rightArrow from '/public/rightArrow.svg';
import Logo from '/public/logo.svg';
import Youtube from '/public/Youtube.svg';
import Instagram from '/public/instagram.svg';
import Linkedin from '/public/linkedin.svg';
import tiktok from '/public/tiktok.svg';
import Book from '/public/Book.svg';
import Support from '/public/Support.svg';
import Target from '/public/Target.svg';
import Leaf from '/public/Leaf.svg';

import books from "/public/books.svg"
import community from "/public/community.svg"
import courses from "/public/courses.svg"
import sprout from "/public/sprout.svg"

import CourseCard from './CourseCard';
import backgroundLeaf from '/public/testLeaf.svg'
import NavBar from './NavBar'

export default function Home() {
  return (
    <>
      <div className='pt-10 pb-4 bg-custom-gradient-diagonal sm:bg-custom-gradient-diagonal-bottom'>
        <NavBar />
        <div className='xl:flex xl:justify-center'>
          <div className="flex flex-col justify-around sm:flex-row sm:items-center items-center max-w-screen-2xl">
            <div className='w-10/12 xl:w-1/2 md:pl-10 xl:pl-0'>
              <div className="text-gradient text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mb-2 font-bold px-6">
                Empowering the Next Generation of Business Leaders
              </div>
              <div className='pl-6 xl:py-4 xl:text-2xl text-min-blue w-11/12 md:w-10/12 lg:w-7/12 xl:w-10/12'>
                At the Green Portfolio Project, we are  dedicated to equipping high school  and college students with essential  business development skills.
              </div>
              <div className="text-sm mt-5 flex items-center space-x-4 flex-none px-6">
                <button className="bg-black text-white px-5 py-2 rounded-lg whitespace-nowrap">Get Started</button>
                <div className="flex items-center">
                  <button className="mr-2">Learn More</button>
                  <Image className="w-5" src={rightArrow} alt="Right Arrow SVG" />
                </div>
              </div>
            </div>
            <div className='py-10 sm:py-8 px-6 flex justify-center'>
              <Image className='w-80 sm:w-full' src={moneyTree} alt="Green Portfolio Tree Logo" />
            </div>
          </div>
        </div>
        <a href="" className='flex justify-center animate-float '>
          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-12 h-12 xl:w-8 xl:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>

      { /* Discover Our Courses Section */ }
      <div className="flex flex-col items-center justify-center text-center mb-20 mt-10">
  <h1 className="mb-4 mx-3 font-inter font-bold text-2xl sm:text-4xl lg:text-5xl text-gradient">Discover Our Courses</h1>
  <div className='relative flex justify-end top-16 w-full md:top-10'>
  <Image
            src={backgroundLeaf}
            alt="tested leaf"
            className='absolute w-[80px] sm:w-[89px]  xl:w-[120px] xl:right-5 '
        />
        
 </div>
  <p className="font-dmsans leading-5 text-min-blue text-sm px-4 mb-20 w-full sm:text-lg sm:w-11/12 md:mb-16 md:w-11/12 lg:text-xl xl:w-10/12 2xl:w-8/12">
    We offer a variety of courses, including our flagship course on creating your own social media marketing agency.
    Additionally, we provide specialized workshops on personal finance, business skills, and college admissions.
  </p>
<div className='mx-auto md:flex md:justify-center md:w-10/12 xl:w-8/12 2xl:w-7/12'>
  <CourseCard imageUrl="/socialMediaCourse.png" title="Social Media Marketing For High Schoolers" active = {true} />
  <CourseCard imageUrl="/PitchDesk.png" title="Pitch Deck Building For Investors" active = {true} />  
  <CourseCard imageUrl='/stockMarket.png' title='Introduction to the Stock Market Coming Soon' active= {false}/>
</div>
    <div className='relative w-full bottom-10'>
    <Image
            src={backgroundLeaf}
            alt="background leaf"
            className='absolute rotate-[-85deg] w-[80px] sm:w-[100px] xl:w-[120px] xl:left-10'
        />
        </div>
  </div>

  {/* Mission and Story Section & BACKGROUND PT 1 */}
   <div className=''>

{/* Title */}
<div className="text-gradient text-3xl sm:text-4xl lg:text-5xl p-2 text-center px-2 font-bold">
Our Story and Missions
</div>

{/* Description */}
<div className= "text-min-blue text-center py-5 md:py-7 2xl:py-10 px-7 sm:px-28 2xl:px-64 text-lg lg:text-xl">
 Welcome to the Green Portfolio Project (GPP), a student-led nonprofit
 organization committed to empowering the next generation of youth with
 the skills they need to succeed in the business world. Our mission is
 to provide accessible and comprehensive education in business development,
 social media marketing, personal finance, and more.
</div>
{/* BACKGROUND PT 2 */}
<div className='bg-custom-gradient-vertical'>

{/* Embedded Video Background & aligning */}
<div className="flex justify-center items-center">

{/* Embeded Video component */}
<YouTubeEmbed videoId="9VlvbpXwLJs" />
</div>



<section className="pt-24 pb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 sm:gap-10 sm:px-5 md:px-0 justify-items-center">  
     <MissionCard 
      title="Free and Accessible" 
      description="All courses, resources, and community access are free." 
      linkHref="#" 
      img={Leaf}
      />

    <MissionCard 
      title="Student-Led and Focused"   
      description="Set and track goals with manageable task breakdowns." 
      linkHref="#" 
      img= {Target}
      />

    <MissionCard 
      title="Practical Learning" 
      description="Apply Your learning with real-world projects and templates. " 
      linkHref="#" 
      img = {Book}
      />

    <MissionCard 
      title="Supportive Environment" 
      description="Our community is here to support you every step of the way." 
      linkHref="#" 
      img= {Support}
      />
    
  </section>
</div>
</div>

<section className="flex flex-col items-center">
    <p className="text-xs font-medium border border-gray-300 rounded-xl px-5 py-1 mt-7 ">Everything you need</p>
    
    <p className = "text-3xl sm:text-4xl lg:text-5xl text-center font-bold py-5">Education, Community, <br></br>and Mentorship</p>
       
         <div className="w-auto px-5 sm:px-0  sm:w-8/12 text-center text-2xl pb-20">
           Empower your journey with comprehensive learning, a <br className="hidden lg:block" /> supportive network, and personalized guidance to <br className="hidden lg:block" /> achieve your goals.
         </div>

{/* ECM cards Background & aligning*/}
<div className="flex justify-center">
   <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 xs:w-9/12 xl:w-8/12 2xl:w-7/12
   lg:w-10/12 gap-6 lg:gap-10 xl:gap-14 2xl:gap-28 lg:py-10 pb-9">

   {/* ECM CardComponents */}
     <EcmCard 
       title="Courses and Tutorials"
       description="Master essential business skills with our courses. Learn social media marketing and personal finance through practical tutorials" 
       img={courses}
     />

     <EcmCard 
       title="Vibrant Online Community" 
       description="Join peers to collaborate, share resources, and build a network of future leaders in our supportive community." 
       img={community}
     />

     <EcmCard 
       title="Extensive Resource Library" 
       description="Explore scholarships, study abroad programs, and more in our curated resource library to further your education and career."
       img={books}
     />

     <EcmCard
       title="Hands On Experience"
       description="Master essential business skills with our courses. Learn social media marketing and personal finance through practical tutorials" 
       img={sprout}
     />
   </div>
 </div>
     </section>



      {/* Sign up Section */}
      <section className="pt-24 pb-11 md:py-24 lg:py-32  bg-custom-gradient-white flex flex-col items-center relative">

      <Image
            src={backgroundLeaf}
            alt="tested leaf"
            className='absolute w-[55px] xs:w-[55px] sm:w-[95px] md:w-[105px] lg:w-[115px] xl:w-[130px] top-12 right-0 xs:top-8 lg:right-14 xl:right-20 2xl:right-52'
        />

      <Image
            src={backgroundLeaf}
            alt="background leaf"
            className='absolute rotate-[-85deg] w-[60px] xs:w-[75px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] left-0 top-56 sm:top-48 lg:left-14 xl:left-24 2xl:left-52'
       />

        <div className="text-gradient text-3xl xs:text-4xl md:text-5xl font-bold text-center w-48 xs:w-auto sm:w-auto flex z-10 p-2">
          Sign up for free today 
          
        </div>

        
        <p className="text-min-blue text-center text-base md:text-lg xs:w-96 md:w-1/2 2xl:w-4/12 pt-2 pb-10 px-2 z-10">
        Empowering students with free courses and a vibrant community to thrive in business. Join us and build your future today!
        </p>
        <div className="flex justify-center gap-4 ">
          <button className="bg-black text-white text-base py-1 px-3 rounded-lg">Sign Up</button>
          <button className="text-lg font-medium flex items-center gap-1">
            Learn more
            <Image className="w-4 pt-1" src={rightArrow} alt="Right Arrow button" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black gap-10 py-10 pl-4 2xl:px-36 text-center flex flex-col sm:flex-row text-white">
        <div className="flex flex-col gap-4">
          <Image className="w-11 2xl:w-14 rounded-2xl shadow-md shadow-green-500" src={Logo} alt="Logo SVG" />
          <p className="text-sky-200 text-start  2xl:text-2xl text-sm">
            Empowering the Next Generation of <br className="hidden md:block" /> Business Leaders
          </p>
          <div className="flex flex-row gap-5 sm:pt-20 py-4">
            <a href="https://www.youtube.com/watch?v=9VlvbpXwLJs&t=3616s" target="_blank" rel="noopener noreferrer">
              <Image className="w-8 2xl:w-12" src={Youtube} alt="Youtube SVG" />
            </a>
            <a href="https://www.instagram.com/green_portfolio_project?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
              <Image className="w-6 2xl:w-10" src={Instagram} alt="Instagram SVG" />
            </a>
            <a href="https://www.linkedin.com/company/green-portfolio-project/" target="_blank" rel="noopener noreferrer">
              <Image className="w-6 2xl:w-10" src={Linkedin} alt="LinkedIn SVG" />
            </a>
            <a href="https://www.tiktok.com/@greenportfolioproject1?_t=8pIWxByNnCQ&_r=1" target="_blank" rel="noopener noreferrer">
              <Image className="w-6 2xl:w-10" src={tiktok} alt="TikTok SVG" />
            </a>
          </div>
        </div>

        <div className="px-3 lg:px-8 2xl:px-0 text-start sm:ml-auto">
          <ul className="flex flex-col sm:flex-row gap-5 lg:gap-28 2xl:gap-36 2xl:text-lg">
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
    </>
  );
}
