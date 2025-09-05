import Image from "next/image";
import {useEffect, useState} from "react";
import {User} from "@/types/User";

export default function HeroSection() {
    const [user,setUser]= useState<User>({} as User)

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
  return (
    <>
      {/* intro */}
      <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 order-2 md:order-none">
        <p className="text-md md:text-lg font-semibold text-gray-200">Hey, I'm Vinuth Sri Arampath 👋</p>
        <p className="text-5xl md:text-6xl font-bold">
          Full <span className="text-lime-400 drop-shadow-[0_0_10px_#a3e635]">Stack</span>
        </p>
        <p className="text-5xl md:text-6xl font-bold">Developer</p>
        <p className="text-md text-center md:text-start md:text-xl text-gray-300 max-w-lg">
          Empower your business with innovative, high-impact software solutions crafted for your success.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <a href="/contact">
            <button className="px-3 py-2 md:px-4 md:py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
              <span className="hidden md:block">Get In Touch</span>
              <span className="block md:hidden">Contact</span>
            </button>
          </a>
          <a href="/projects">
            <button className="px-3 py-2 md:px-4 md:py-3 outline-2 outline-lime-500 rounded-lg font-semibold text-lime-500 hover:text-lime-400 hover:outline-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
            <span className="hidden md:block">Browse Projects</span>
            <span className="block md:hidden">Projects</span>
            </button>
          </a>
        </div>
      </div>
      {/* image section */}
      <div className="col-span-1 flex justify-center md:justify-end items-center order-1 md:order-none">
        <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 aspect-square drop-shadow-[0_0_12px_#fff035]">
          <Image src={ user.avatar && user.avatar !== "" ? user.avatar : "/boru.png" } alt="Profile Picture" fill className="object-cover rounded-full border-4 border-dashed border-lime-300 p-2 md:p-4" sizes="100vw" />
        </div>
      </div>
    </>
  )
}