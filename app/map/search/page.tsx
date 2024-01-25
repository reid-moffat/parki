import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";

const Search = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            Page for searching addresses
            <BottomBar/>
        </div>
    );
}

export default Search;
