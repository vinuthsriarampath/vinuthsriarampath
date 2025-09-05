import {useEffect, useState} from "react";
import {User} from "@/types/User";

export default function StorySection() {
    const [user,setUser]= useState<User>({} as User)

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        <>
            <h1 className="text-4xl md:text-7xl font-bold">My <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent ">Story.</span></h1>
            <div className="text-md sm:text-lg md:text-2xl space-y-3 text-justify">
                <p className="whitespace-pre-line text-gray-200 leading-relaxed">
                    {user.bio}
                </p>
            </div>
        </>
    )
}