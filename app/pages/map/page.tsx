import React from 'react'
import Maps from '@/app/components/Map'


import dynamic from 'next/dynamic'
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../../components/Map'), {
  ssr: false,
})


const MapSelectionPage = () => {
  return (
    <div>
      mapSelectionPage
      <Maps />
    </div>
  )
}

export default MapSelectionPage