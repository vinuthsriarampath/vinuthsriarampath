"use client";

import { Platform } from "@/types/enums/Platform";
import { Social } from "@/types/Socials";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
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
    <div className=" flex justify-center md:justify-between items-center p-5 bg-black">
      <p className="text-gray-400 text-wrap">&copy; 2025-present, Vinuth Sri Aramapath. All rights reserved.</p>
      <div className="hidden md:block">
        <div className="flex space-x-4">
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
                <IconComponent className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}