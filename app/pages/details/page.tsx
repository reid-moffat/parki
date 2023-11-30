"use client";
import React from 'react'
import style from '@/app/styles/Map.module.css'
import Image from 'next/image';
import logo from "@/public/logo.png";
import footer from "@/public/map/bottom.png";
import profileIcon from "@/public/map/user.png";
import mapIcon from "@/public/map/map.png";
import settingsIcon from "@/public/map/settings.png";
import Details from '@/app/components/Details';

const DetailsPage = () => {
    return (
        <div className={style.mapPage}>
            <div className='h-[90%] overflow-y-scroll' >
                <div className='absolute h-[15%]'>
                    <div className={style.logoContainer}>
                        {/* @ts-ignore */}
                        <Image src={logo} alt="Parki logo"/>
                    </div>
                </div >
                <div className='h-[85%] pt-[35%] pl-[5%] pr-[5%]'>
                    <Details/>
                </div>
            </div>

            <div className={style.footerContainer}>
                <Image src={footer} alt={"Bottom bar"} style={{ width: '100%' }}/>
                <Image src={profileIcon} alt={"Bottom bar"} className={style.footerProfileIcon}/>
                <Image src={mapIcon} alt={"Bottom bar"} className={style.footerMapIcon}/>
                <Image src={settingsIcon} alt={"Bottom bar"} className={style.footerSettingsIcon}/>
            </div>
        </div>
    )
}

export default DetailsPage;
