import React from 'react'
import Link from 'next/link'

const MapViewButton = () => {
    return (
        <Link href="/pages/map">
            <button className="black_btn">
                <p>Go To Map Page</p>
            </button>
        </Link>
    )
}

export default MapViewButton
