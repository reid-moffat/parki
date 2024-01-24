import React from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import profile from "@/public/footer/profile.png";
import map from "@/public/footer/map.png";
import spots from "@/public/footer/spots.png";

const BottomBar = () => {

    const getFooterImage = () => {
        const path = usePathname();

        if (path.startsWith("/profile")) {
            return profile;
        } else if (path.startsWith("/map")) {
            return map;
        } else if (path.startsWith("/spots")) {
            return spots;
        } else {
            throw new Error("Unknown path (in BottomBar.tsx): " + path);
        }
    }

    return (
        <Image src={getFooterImage()} alt={"Bottom bar"} className="w-[100vw] h-[10vh] object-fill"/>
    );
}

export default BottomBar;
