'use client';

import MainSection from "@/app/components/shared/main-section";
import { Github, Facebook, Instagram, Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { Platform } from "@/types/enums/Platform";
import { Social } from "@/types/Socials";

export default function ContactPage() {
    const [user, setUser] = useState<User>({} as User)
    const [socials, setSocials] = useState({
        linkedin: '',
        github: '',
        facebook: '',
        instagram: ''
    });

    useEffect(() => {
        getSocialsFromSession();
    }, []);

    const getSocialsFromSession = () => {
        const user = sessionStorage.getItem('user');
        if (!user) {
            alert("User not found in session!");
            return;
        }

        try {
            const parsedUser = JSON.parse(user);
            setUser(parsedUser);
            if (!parsedUser.socials || parsedUser.socials.length === 0) {
                alert("No social accounts linked to this user!");
                return;
            }

            const socialMap = parsedUser.socials.reduce((acc: Record<string, string>, social: Social) => {
                switch (social.platform) {
                    case Platform.LINKEDIN:
                        acc.linkedin = social.url;
                        break;
                    case Platform.GITHUB:
                        acc.github = social.url;
                        break;
                    case Platform.FACEBOOK:
                        acc.facebook = social.url;
                        break;
                    case Platform.INSTAGRAM:
                        acc.instagram = social.url;
                        break;
                }
                return acc;
            }, {});

            setSocials(socialMap);
        } catch (error) {
            console.error("Error parsing user data:", error);
            alert("Error loading user data!");
        }
    }
    return (
        <MainSection>
            <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 order-2 md:order-none space-y-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-0 text-center">
                    Got a <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Version ?</span> Let's bring it to <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Life .</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg ">
                    I'm alway loved to collaborate in new innovative ideas,Whether you're starting from scratch or refining an existing idea.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                    I'm available to work together, Don't hesitate to reach me out
                </p>
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <a href={`mailto:${user.email}`} className="flex flex-row items-center gap-4 cursor-pointer hover:drop-shadow-[0_0_10px_#a3e635]">
                        <button className="rounded-full w-10 h-10 md:w-15 md:h-15 aspect-square flex justify-center items-center bg-lime-500 font-semibold text-black hover:bg-lime-400 transition-all duration-300 cursor-pointer">
                            <Mail className="size-4 md:size-8" />
                        </button>
                        <p className="text-sm sm:text-md md:text-xl">{user.email}</p>
                    </a>
                    <a href={`tel:${user.contact}`} className="flex flex-row items-center gap-4 hover:drop-shadow-[0_0_10px_#a3e635]">
                        <button className="rounded-full w-10 h-10 md:w-15 md:h-15 aspect-square flex justify-center items-center bg-lime-500 font-semibold text-black hover:bg-lime-400 transition-all duration-300 cursor-pointer">
                            <Phone className="size-4 md:size-8" />
                        </button>
                        <p className="text-sm sm:text-md md:text-xl">{user.contact}</p>
                    </a>
                </div>
                <div className="flex gap-4 mt-0 md:mt-5 mb-5">
                    {[
                        { key: 'linkedin', url: socials.linkedin, icon: Linkedin },
                        { key: 'github', url: socials.github, icon: Github },
                        { key: 'facebook', url: socials.facebook, icon: Facebook },
                        { key: 'instagram', url: socials.instagram, icon: Instagram }
                    ].filter(social => social.url).map(social => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={social.key}
                                href={social.url}
                                target="_blank"
                                className="hover:underline"
                            >
                                <button className="rounded-full w-8 h-8 md:w-10 md:h-10 aspect-square flex justify-center items-center outline-2 outline-lime-500 font-semibold cursor-pointer hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635] text-white hover:text-black">
                                    <IconComponent className="size-4 md:size-6" />
                                </button>
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="col-span-1 flex justify-center md:justify-end items-center order-1 md:order-none mt-3 md:mt-0">
                <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 aspect-square drop-shadow-[0_0_12px_#fff035]">
                    <Image src={user.avatar && user.avatar !== "" ? user.avatar : "/boru.png"} alt="Profile Picture" fill className="object-cover rounded-full border-4 border-dashed border-lime-300 p-2 md:p-4" sizes="100vw" />
                </div>
            </div>
        </MainSection>
    )
}