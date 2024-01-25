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

    let image: StaticImport;
    if (path.startsWith("/profile")) {
        image = profile;
    } else if (path.startsWith("/map")) {
        image = map;
    } else if (path.startsWith("/spots")) {
        image = spots;
    } else {
        throw new Error("Unknown path (in BottomBar.tsx): " + path);
    }

    const getFooterImage = () => {
        return (
            <>
                <Image
                    src={image}
                    alt={"Bottom bar"}
                />
                <Link href={"/profile"}>
                    <Image
                        src={profileIconOff}
                        alt={"Profile icon"}
                        className={"fixed bottom-2 left-20 w-11"}
                    />
                </Link>
                <div className={"fixed w-screen bottom-3 flex items-center justify-center"}>
                    <Image
                        src={mapIconOn}
                        alt={"Map icon"}
                        className={"w-10"}
                    />
                </div>
                <Link href={"/spots"}>
                    <Image
                        src={spotsIconOff}
                        alt={"Spots icon"}
                        className={"fixed bottom-2 right-20 w-11"}
                    />
                </Link>
            </>
        );
    }

    return (
        <div className="fixed bottom-0 w-full">
            {getFooterImage()}
        </div>
    );
}

export default BottomBar;
