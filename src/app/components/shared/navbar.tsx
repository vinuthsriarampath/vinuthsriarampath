"use client";

import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
        <nav className="backdrop-blur-sm ">
            <div className="mx-auto px-5">
                <div className="relative flex h-16 items-center justify-between ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className={isMenuOpen ? "hidden size-6" : "block size-6"}>
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className={isMenuOpen ? "block size-6" : "hidden size-6"} >
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between ">
                        <a href="/home">
                            <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold">Vinu</span>
                            <span className="text-lime-500 cursor-pointer">.</span>
                        </a>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link href={"/home"} className={`${pathname === "/home" ? "bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold decoration-2 decoration" : "hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration"}`}>Home</Link>
                                <Link href={"/projects"} className={`${pathname === "/projects" ? "bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold decoration-2 decoration" : "hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration"}`}>Projects</Link>
                                <Link href={"/about"} className={`${pathname === "/about" ? "bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold decoration-2 decoration" : "hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration"}`}>About</Link>
                                <Link href={"/contact"} className={`${pathname === "/contact" ? "bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent font-bold decoration-2 decoration" : "hover:underline hover:decoration-lime-500 bg-gradient-to-r hover:from-lime-400 hover:via-emerald-500 hover:to-lime-600 hover:bg-clip-text hover:text-transparent font-bold decoration-2 decoration"}`}>Contact</Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/vinuth-sri-arampath" className="hover:underline"><Linkedin className="size-5" /></a>
                                <a href="https://www.github.com/vinuthsriarampath" className="hover:underline"><Github className="size-5" /></a>
                                <a href="https://www.facebook.com/vinuth.arampath.984/" className="hover:underline"><Facebook className="size-5" /></a>
                                <a href="https://www.instagram.com/vinuth_arampath/" className="hover:underline"><Instagram className="size-5" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link href={"/home"} aria-current="page" className={`${pathname === "/home"?"block rounded-md bg-lime-700 px-3 py-2 text-base font-medium text-white" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" }`}>Home</Link>
                        <Link href={"/projects"} className={`${pathname === "/projects"?"block rounded-md bg-lime-700 px-3 py-2 text-base font-medium text-white" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" }`}>Projects</Link>
                        <Link href={"/about"} className={`${pathname === "/about"?"block rounded-md bg-lime-700 px-3 py-2 text-base font-medium text-white" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" }`}>About</Link>
                        <Link href={"/contact"} className={`${pathname === "/contact"?"block rounded-md bg-lime-700 px-3 py-2 text-base font-medium text-white" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" }`}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}