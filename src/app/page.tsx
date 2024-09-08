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

import CourseCard from './CourseCard';
import backgroundLeaf from '/public/backgroundLeaf.png';

export default function Home() {
  return (
    <>
      <div className='pt-10 pb-4 bg-custom-gradient-diagonal sm:bg-custom-gradient-diagonal-bottom'>
        <div className='xl:flex xl:justify-center'>
          <div className="flex flex-col justify-around sm:flex-row sm:items-center items-center max-w-screen-2xl">
            <div className='w-10/12 xl:w-1/2'>
              <div className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mb-2 font-bold px-6">
                Empowering the Next Generation of Business Leaders
              </div>
              <div className='px-6 xl:py-4 xl:text-2xl'>
                At the Green Portfolio Project, we are dedicated to equipping high school and college students with essential business development skills.
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
        <a href="" className='flex justify-center animate-float'>
          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>

      {/* Discover Our Courses Section */}
      <div className="flex flex-col items-center justify-center flex-wrap text-center my-20">
        <h1 className="mb-4 mx-3 font-inter font-bold text-3xl sm:text-4xl lg:text-5xl">Discover Our Courses</h1>
        <div className='relative flex justify-end top-28 w-full md:top-10'>
          <Image src={backgroundLeaf} alt="background leaf" width={65} height={500} className='absolute sm:w-[90px] md:w-[100px] xl:w-[120px] xl:right-5' />
        </div>
        <p className="font-dmsans leading-5 text-sky-950  mb-10 w-full sm:text-lg sm:w-11/12 md:mb-16 md:w-11/12 lg:text-xl xl:w-10/12 2xl:w-8/12 px-6 xl:py-4 xl:text-2xl">
          We offer a variety of courses, including our flagship course on creating your own social media marketing agency. Additionally, we provide specialized workshops on personal finance, business skills, and college admissions.
        </p>
        <div className='w-8/12 sm:w-7/12 md:flex md:w-10/12 xl:w-8/12 2xl:w-7/12 flex flex-wrap justify-center'>
          <CourseCard imageUrl="/socialMediaCourse.png" title="Social Media Marketing For High Schoolers" active={true} />
          <CourseCard imageUrl="/PitchDesk.png" title="Pitch Deck Building For Investors" active={true} />
          <CourseCard imageUrl='/stockMarket.png' title='Introduction to the Stock Market Coming Soon' active={false} />
        </div>
        <div className='relative w-full bottom-10'>
          <Image src={backgroundLeaf} alt="background leaf" width={70} height={500} className='absolute rotate-[-85deg] sm:w-[100px] xl:w-[120px] xl:left-10' />
        </div>
      </div>

      {/* Mission and Story Section */}
           {/*      {/* Mission and Story Section */}
           <div>

{/* Title */}
<div className="text-3xl sm:text-4xl lg:text-5xl tracking-widest text-center px-2 font-bold">
Our Story and Mission
</div>

{/* Description */}
<div className= "text-center py-5 md:py-7 2xl:py-10 px-7 sm:px-28 2xl:px-64 text-lg lg:text-xl">
 Welcome to the Green Portfolio Project (GPP), a student-led nonprofit
 organization committed to empowering the next generation of youth with
 the skills they need to succeed in the business world. Our mission is
 to provide accessible and comprehensive education in business development,
 social media marketing, personal finance, and more.
</div>

<div className='bg-custom-gradient-vertical'>

{/* Embedded Video Background & aligning */}
<div className="flex justify-center items-center">

{/* Embeded Video component */}
<YouTubeEmbed videoId="9VlvbpXwLJs" />
</div>



<section className="pt-20 pb-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 sm:gap-10 sm:px-5 md:px-0 justify-items-center">  
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
      description="Our applied knowledge templates and real-world projects ensure you can put your learning into practice." 
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

      {/* Sign up Section */}
      <section className="py-20 text-center space-y-10">
        <p className="text-5xl font-bold">
          Sign up for <br className="sm:hidden" />free today
        </p>
        <p className="text-lg sm:text-xl">
          Empowering students with free courses and a vibrant community<br className="hidden sm:block" /> to thrive in business. Join us and build your future today!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white py-2 px-4 rounded-lg">Sign Up</button>
          <button className="text-lg flex items-center text-black gap-2">
            Learn more
            <Image className="w-7" src={rightArrow} alt="Right Arrow SVG" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black gap-10 py-10 px-10 2xl:px-36 text-center flex flex-col sm:flex-row text-white">
        <div className="flex flex-col gap-7">
          <Image className="w-12 2xl:w-14 rounded-2xl shadow-md shadow-green-500" src={Logo} alt="Logo SVG" />
          <p className="text-sky-200 text-start text-lg 2xl:text-2xl sm:text-base">
            Empowering the Next Generation of <br className="hidden md:block" /> Business Leaders
          </p>
          <div className="flex flex-row gap-5 sm:pt-20">
            <a href="https://www.youtube.com/watch?v=9VlvbpXwLJs&t=3616s" target="_blank" rel="noopener noreferrer">
              <Image className="w-10 2xl:w-12" src={Youtube} alt="Youtube SVG" />
            </a>
            <a href="https://www.instagram.com/green_portfolio_project?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
              <Image className="w-8 2xl:w-10" src={Instagram} alt="Instagram SVG" />
            </a>
            <a href="https://www.linkedin.com/company/green-portfolio-project/" target="_blank" rel="noopener noreferrer">
              <Image className="w-8 2xl:w-10" src={Linkedin} alt="LinkedIn SVG" />
            </a>
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
    </>
  );
}
