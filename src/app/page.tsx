import Image from 'next/image'
import moneyTree from '/public/moneyTree.png'
import MissionCard from "./MissionCard"; 
import EcmCard from "./EcmCard";
import YouTubeEmbed from './YouTubeEmbed';
import rightArrow from '/public/rightArrow.svg'

export default function Home() {
  return (
    <>
    {/* Home Section */}
    <div className=' pt-10 pb-4 bg-custom-gradient-diagonal sm:bg-custom-gradient-diagonal-bottom'>

    <div className=' xl:flex xl:justify-center'>


        <div className=" flex flex-col justify-around sm:flex-row sm:items-center items-center max-w-screen-2xl">
          <div className='w-10/12 xl:w-1/2'> 

            <div className="text-3xl  sm:text-4xl lg:text-6xl xl:text-7xl mb-2 font-bold px-6 ">
                  Empowering the Next Generation of Business Leaders
            </div>
            <div className='px-6 xl:py-4 xl:text-2xl'>
                At the Green Portfolio Project, we are dedicated to equipping high school and college students with essential business development skills.
            </div>

            <div className=" text-sm mt-5 flex items-center space-x-4 flex-none px-6 ">
                <button className="bg-black text-white px-5 py-2 rounded-lg whitespace-nowrap">Get Started</button>
                <div className="flex items-center">
                    <button className="mr-2">Learn More</button>
                    <Image className="w-5" src={rightArrow} alt="Right Arrow SVG" />
                </div>
            </div>
          </div>
            <div className=' py-10 sm:py-8 px-6 flex justify-center   '>
              <Image className='w-80 sm:w-full '
                src={moneyTree}
                alt="Green Portfolio Tree Logo"
                />
            </div>
          
 
                </div>
              </div>
                <a href="" className='flex justify-center animate-float'><svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
        </div>

      {/*      {/* Mission and Story Section */}
     <div>

       {/* Title */}
       <div className="text-2xl sm:text-4xl lg:text-5xl  text-center p-2 font-bold">
       Our Story and Mission
       </div>

       {/* Description */}
       <div className= "text-center py-5 md:py-7 2xl:py-10 px-2 sm:px-28 2xl:px-64 lg:text-xl">
        Welcome to the Green Portfolio Project (GPP), a student-led nonprofit
        organization committed to empowering the next generation of youth with
        the skills they need to succeed in the business world. Our mission is
        to provide accessible and comprehensive education in business development,
        social media marketing, personal finance, and more.
     </div>

    <div className='bg-custom-gradient-vertical'>

   {/* Embedded Video Background & aligning */}
   <div className=" flex justify-center items-center">

  {/* Embeded Video component */}
   <YouTubeEmbed videoId="9VlvbpXwLJs" />

   </div>

   {/* Mission cards Background & aligning*/}
   <div className="flex justify-center 2xl:justify-evenly ">
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
     <section>
     sign up
     </section>

    {/* Footter section */}
     <section>
 Footer
     </section>

     </div>   
    </>
  );
}
