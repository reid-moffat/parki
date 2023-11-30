import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";

const FilterPage = () => {
    return (
        <div className={style.filterPage}>
            <div>
                <MdArrowBackIos/>
                <FaFilterCircleXmark/>
                Filter
            </div>

            Parking ending on
            [date]

            Within [x] km
            [Distance slider]

            Price range
            [price slider]

            [Tags]
        </div>
    );
}

export default FilterPage;
