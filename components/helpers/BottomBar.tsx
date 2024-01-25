"use client";
import React from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import profile from "@/public/footer/profileBottomBar.png";
import profileIconOff from "@/public/footer/profileIconOff.png";
import profileIconOn from "@/public/footer/profileIconOn.png";
import map from "@/public/footer/mapBottomBar.png";
import mapIconOff from "@/public/footer/mapIconOff.png";
import mapIconOn from "@/public/footer/mapIconOn.png";
import spots from "@/public/footer/spotsBottomBar.png";
import spotsIconOff from "@/public/footer/spotsIconOff.png";
import spotsIconOn from "@/public/footer/spotsIconOn.png";

const BottomBar = () => {

    const path = usePathname();

    // Verify path + get background of bottom bar
    let image: StaticImport;
    if (path.startsWith("/profile")) {
        image = profile;
    } else if (path.startsWith("/map")) {
        image = map;
    } else if (path.startsWith("/spots")) {
        image = spots;
    } else {
        throw new Error("Unknown current site path (in BottomBar.tsx): " + path);
    }

    const getIcon = (iconName: string) => {
        let icon;
        switch (iconName) {
            case "profile":
                icon = (
                    <Image
                        src={path.startsWith("/profile") ? profileIconOn : profileIconOff}
                        alt={"Profile icon - click to see your profile"}
                        className={"fixed bottom-3 left-[5.4rem] w-10"}
                    />
                );
                if (path.startsWith("/profile")) {
                    return icon;
                }
                return <Link href={"/profile"}>{icon}</Link>;
            case "map":
                icon = (
                    <Image
                        src={path.startsWith("/map") ? mapIconOn : mapIconOff}
                        alt={"Map icon - click to see your map"}
                        className={"w-10"}
                    />
                );
                if (path.startsWith("/map")) {
                    return (
                        <div className={"fixed w-screen bottom-3 flex items-center justify-center"}>
                            {icon}
                        </div>
                    );
                }
                return (
                    <div className={"fixed w-screen bottom-3 flex items-center justify-center"}>
                        <Link href={"/map"}>{icon}</Link>
                    </div>
                );
            case "spots":
                icon = (
                    <Image
                        src={path.startsWith("/spots") ? spotsIconOn : spotsIconOff}
                        alt={"Spots icon - click to see your spots"}
                        className={"fixed bottom-3 right-[5.5rem] w-10"}
                    />
                );
                if (path.startsWith("/spots")) {
                    return icon;
                }
                return <Link href={"/spots"}>{icon}</Link>;
            default:
                throw new Error("Unknown icon name (in BottomBar.tsx): " + icon);
        }
    }

    return (
        <div className="fixed bottom-0 w-full">
            <Image src={image} alt={"Bottom bar"}/>

            {/* Map icon goes first since it's contained in a div and will override the profile onCLick otherwise */}
            {getIcon("map")}
            {getIcon("profile")}
            {getIcon("spots")}
        </div>
    );
}

export default BottomBar;
