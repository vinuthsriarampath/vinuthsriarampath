import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-black via-emerald-950 to-lime-500 p-0">
      <div className="flex justify-between items-center p-5 backdrop-blur-sm text-lg">
        <a href="/home">
          <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold">Vinu</span>
          <span className="text-lime-500 cursor-pointer">.</span>
        </a>
        <div className="flex gap-4">
          <Link href={"/home"} className="hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration">Home</Link>
          <Link href={"/projects"} className="hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration">Projects</Link>
          <Link href={"/about"} className="hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration">About</Link>
          <Link href={"/contact"} className="hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration">Contact</Link>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/vinuth-sri-arampath" className="hover:underline"><Linkedin className="size-5" /></a>
          <a href="https://www.github.com/vinuthsriarampath" className="hover:underline"><Github className="size-5" /></a>
          <a href="#" className="hover:underline"><Facebook className="size-5" /></a>
          <a href="#" className="hover:underline"><Instagram className="size-5" /></a>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="px-24">
          {children}
        </div>
        <div className="mt-10 flex justify-between items-center p-20 bg-black">
          <p className="text-gray-400">&copy; 2025-present, Vinuth Sri Aramapath. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/vinuth-sri-arampath" className="hover:underline"><Linkedin className="size-5" /></a>
            <a href="https://www.github.com/vinuthsriarampath" className="hover:underline"><Github className="size-5" /></a>
            <a href="#" className="hover:underline"><Facebook className="size-5" /></a>
            <a href="#" className="hover:underline"><Instagram className="size-5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}