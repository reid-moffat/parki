// this file is used to outline what a parking spot post would look like in the list/quick view for thumbnails
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ParkingSpot = () => {
  // Replace this with a thumbnail image api call when retreiving all the posts
  var spotImgSrc = "../../public/next.svg";

  return (
    <div className="m-5 bg-blue-200 w-3/6 p-5">
      <Image
      src="/1200px-Parking_icon.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    </div>
  )
}

export default ParkingSpot