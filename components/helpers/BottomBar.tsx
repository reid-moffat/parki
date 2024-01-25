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

    return (
        <div className="fixed bottom-0 w-full">
            <Image src={image} alt={"Bottom bar"}/>

            {/* Map icon goes first since it's contained in a div and will override the profile onCLick otherwise */}
            <div className={"fixed w-screen bottom-3 flex items-center justify-center"}>
                <Image
                    src={path.startsWith("/map") ? mapIconOn : mapIconOff}
                    alt={"Map icon - click to go to the spots map"}
                    className={"w-10"}
                />
            </div>
            <Link href={"/profile"}>
                <Image
                    src={path.startsWith("/profile") ? profileIconOn : profileIconOff}
                    alt={"Profile icon - click to go to your profile"}
                    className={"fixed bottom-2 left-20 w-11"}
                />
            </Link>
            <Link href={"/spots"}>
                <Image
                    src={path.startsWith("/spots") ? spotsIconOn : spotsIconOff}
                    alt={"Spots icon - click to see your spots"}
                    className={"fixed bottom-2 right-20 w-11"}
                />
            </Link>
        </div>
    );
}

export default BottomBar;
