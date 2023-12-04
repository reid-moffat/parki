import React, { useState } from 'react'
import Image from "next/image";
import logo from "@/public/logo.png";
import MapPage from "@/app/pages/MapPage";

enum Pages {
    MAP,
    PROFILE
    // TODO: What's the other option?
}

const Navigator = () => {

    const [page, setPage] = useState(Pages.MAP);

    const renderPage = () => {
        switch (page) {
            case Pages.MAP:
                return <MapPage/>
            case Pages.PROFILE:
                break;
            default:
                throw new Error(`Unknown top-level page state: ${page}`);
        }
    }

    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', 'zIndex': '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

            {renderPage()}
        </div>
    );
}

export default Navigator;
