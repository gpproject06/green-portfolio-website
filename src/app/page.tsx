import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6">
      {/* Home Section */}
      <div className="flex flex-col justify-around my-10">

        <div className="text-4xl ">
          Empowering the Next Generatiuon of Business Leaders
        </div>
        <div>
          At the Green Portfolio Project, we are dedicated to equipping high school and college students with essential business development skills.
        </div>
        <div>
          <button className="bg-black text-white px-7 py-2 rounded-lg"> Get Started </button>
          <button> Learn More </button>
        </div>
      
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
