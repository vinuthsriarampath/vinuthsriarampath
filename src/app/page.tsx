import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-black via-emerald-950 to-lime-500 flex flex-col justify-center items-center text-white px-4">
      <div className="relative w-40 h-40 md:w-60 md:h-60 mb-6">
        <Image src="https://nycuybywyqgqnlwictzm.supabase.co/storage/v1/object/public/avatars/1752738899881.jpeg" alt="Profile Picture" fill className="object-cover rounded-full shadow-lg border-2 border-dashed border-yellow-200 p-2 md:p-6" sizes="(max-width: 768px) 100px, 240px" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Welcome To My Portfolio</h1>
      <p className="text-md md:text-xl mb-4 md:mb-8 text-gray-300 text-center max-w-xl">I'm Vinuth Sri Arampath, a passionate developer crafting beautiful and functional web experiences. Explore my work and get to know me!</p>
      <a href="/home" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold p-3 md:py-3 md:px-10 rounded-full shadow transition duration-300 flex flex-row gap-2">
        <span className="hidden md:block">Continue</span><ArrowRight/>
      </a>
    </div>
  );
}
