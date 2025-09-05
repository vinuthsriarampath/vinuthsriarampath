'use client';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types/User";

export default function Home() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const BASE_URL = process.env.NEXT_PUBLIC_VYNEX_BASE_URL || "";

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/open/user/get?userId=1`);
            setUser(response.data);
            sessionStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const msg =
                    error.response?.data?.error ??
                    error.response?.data?.errors?.[0]?.message;
                alert(msg ?? "Something went wrong");
            } else {
                alert(error instanceof Error ? error.message : "Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-emerald-950 to-lime-500 text-white">
                <div className="relative flex items-center justify-center mb-6">
                    {/* Spinning border */}
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-lime-400 border-t-transparent border-b-transparent"></div>
                    {/* Static emoji in the center */}
                    <span className="absolute text-2xl">🖐️</span>
                </div>

                <p className="text-xl font-medium animate-pulse">
                    Fetching your profile...
                </p>
            </div>

        );
    }

    return (
        <div className="h-screen bg-gradient-to-br from-black via-emerald-950 to-lime-500 flex flex-col justify-center items-center text-white px-4">
            <div className="relative w-40 h-40 md:w-60 md:h-60 mb-6">
                <Image src={user?.avatar && user.avatar !== "" ? user.avatar : "/og-image.png"} alt="Profile Picture" fill className="object-cover rounded-full shadow-lg border-2 border-dashed border-yellow-200 p-2 md:p-6" sizes="(max-width: 768px) 100px, 240px"/>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                Welcome To My Portfolio
            </h1>
            <p className="text-md md:text-xl mb-4 md:mb-8 text-gray-300 text-center max-w-xl">
                I'm Vinuth Sri Arampath, a passionate developer crafting beautiful and functional web experiences. Explore my work and get to know me!
            </p>
            <a href="/home" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold p-3 md:py-3 md:px-10 rounded-full shadow transition duration-300 flex flex-row gap-2">
                <span className="hidden md:block">Continue</span>
                <ArrowRight />
            </a>
        </div>
    );
}
