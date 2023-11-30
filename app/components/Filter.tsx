import React from 'react';
import Image from 'next/image';
import backArrow from '@/public/map/back.png';
import filterIcon from '@/public/map/filter.png';

const FilterPage = () => {
    return (
        <>
            <Image src={backArrow} alt={"Go back"}/>
            <Image src={filterIcon} alt={"Filter icon"}/>
        </>
    );
}

export default FilterPage;
