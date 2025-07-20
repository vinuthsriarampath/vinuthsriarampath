import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className=" flex justify-center md:justify-between items-center p-5 bg-black">
      <p className="text-gray-400 text-wrap">&copy; 2025-present, Vinuth Sri Aramapath. All rights reserved.</p>
      <div className="hidden md:block">
        <div className="flex gap-4 ">
          <a href="https://www.linkedin.com/in/vinuth-sri-arampath" className="hover:underline"><Linkedin className="size-5" /></a>
          <a href="https://www.github.com/vinuthsriarampath" className="hover:underline"><Github className="size-5" /></a>
          <a href="#" className="hover:underline"><Facebook className="size-5" /></a>
          <a href="#" className="hover:underline"><Instagram className="size-5" /></a>
        </div>
      </div>
    </div>
  )
}