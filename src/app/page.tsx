import Image from "next/image";
import moneyTree from '/public/moneyTree.png'
import rightArrow from '/public/rightArrow.svg'
export default function Home() {
  return (
    <main className="">
      {/* Home Section */}
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
  <a href="" className='flex justify-center motion-safe:animate-float md:col-span-4 lg:col-span-12 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
  </a>
</div>

    
    {/* Mission and Story Section */}
    <div className="border-black border-2 h-96">
      <div>
      Mission and Story
      </div>
    </div>
    
    
    
    </main>

  );
}
