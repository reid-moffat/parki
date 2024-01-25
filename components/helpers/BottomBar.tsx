"use client";
import React from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import profile from "@/public/footer/profile.png";
import profileIcon from "@/public/footer/profileIcon.png";
import map from "@/public/footer/map.png";
import mapIcon from "@/public/footer/mapIcon.png";
import spots from "@/public/footer/spots.png";
import spotsIcon from "@/public/footer/spotsIcon.png";
import Link from "next/link";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
                        src={profileIcon}
                        alt={"Profile icon"}
                        className={"fixed bottom-2 left-20 w-11"}
                    />
                </Link>
                <div className={"fixed w-screen bottom-3 flex items-center justify-center"}>
                    <Image
                        src={mapIcon}
                        alt={"Map icon"}
                        className={"w-10"}
                    />
                </div>
                <Link href={"/spots"}>
                    <Image
                        src={spotsIcon}
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
