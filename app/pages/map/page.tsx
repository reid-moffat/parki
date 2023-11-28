import React from 'react'
import Maps from "@/app/components/Map";
import SearchBar from "@/app/components/SearchBar";

const MapSelectionPage = () => {
  return (
    <div style={{ 'backgroundColor': '#343632' }}>
        <Maps/>
        <SearchBar/>
    </div>
  )
}

export default MapSelectionPage;
