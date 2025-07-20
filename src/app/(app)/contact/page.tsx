import { Github, Facebook, Instagram, Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 px-4 md:px-0">
            <div className="col-span-1 flex flex-col justify-center gap-4">
                <h1 className="text-5xl md:text-5xl font-bold mt-0">
                    Got a <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Version ?</span> Let's bring it to <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Life .</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                    I'm alway loved to collaborate in new innovative ideas,Whether you're starting from scratch or refining an existing idea.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                    I'm available to work together, Don't hesitate to reach me out
                </p>
                <div className="flex flex-col gap-4 mt-6">
                    <a href="mailto:vinuthsriarampath@outlook.com" className="flex flex-row items-center gap-4 cursor-pointer hover:drop-shadow-[0_0_10px_#a3e635]">

                        <button className="rounded-full w-15 h-15 flex justify-center items-center bg-lime-500 font-semibold text-black hover:bg-lime-400 transition-all duration-300 cursor-pointer">
                            <Mail className="size-8" />
                        </button>
                        <p className="text-xl">vinuthsriarampath@outlook.com</p>
                    </a>
                    <a href="tel:+1234567890" className="flex flex-row items-center gap-4 hover:drop-shadow-[0_0_10px_#a3e635]">

                        <button className="rounded-full w-15 h-15 flex justify-center items-center bg-lime-500 font-semibold text-black hover:bg-lime-400 transition-all duration-300 cursor-pointer">
                            <Phone className="size-8" />
                        </button>
                        <p className="text-xl">+94 71 940 1853</p>
                    </a>
                </div>
                <div className="flex gap-4 mt-5">
                    <a href="https://www.linkedin.com/in/vinuth-sri-arampath" className="hover:underline">
                        <button className="rounded-full w-10 h-10 flex justify-center items-center outline-2 outline-lime-500 font-semibold cursor-pointer hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635] text-white hover:text-black">
                            <Linkedin className="size-6 " />
                        </button>
                    </a>
                    <a href="https://www.github.com/vinuthsriarampath" className="hover:underline">
                        <button className="rounded-full w-10 h-10 flex justify-center items-center outline-2 outline-lime-500 font-semibold cursor-pointer hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635] text-white hover:text-black">
                            <Github className="size-6" />
                        </button>
                    </a>
                    <a href="#" className="hover:underline">
                        <button className="rounded-full w-10 h-10 flex justify-center items-center outline-2 outline-lime-500 font-semibold cursor-pointer hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635] text-white hover:text-black">
                            <Facebook className="size-6" />
                        </button>
                        
                    </a>
                    <a href="#" className="hover:underline">
                        <button className="rounded-full w-10 h-10 flex justify-center items-center outline-2 outline-lime-500 font-semibold cursor-pointer hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635] text-white hover:text-black">
                            <Instagram className="size-6" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="col-span-1 flex justify-center md:justify-end items-center">
                <div className="relative w-48 h-48 md:w-96 md:h-96 drop-shadow-[0_0_12px_#fff035]">
                    <Image src="https://nycuybywyqgqnlwictzm.supabase.co/storage/v1/object/public/avatars/1752738899881.jpeg" alt="Profile Picture" fill className="object-cover rounded-full border-4 border-dashed border-lime-300 p-2 md:p-4" sizes="(max-width: 768px) 192px, 384px" />
                </div>
            </div>
        </div>
    )
}