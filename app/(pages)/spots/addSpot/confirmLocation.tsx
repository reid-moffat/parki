import Image from "next/image";
import DummyMap from "@/public/spot/dummy_map.png";
import { MdChevronLeft } from "react-icons/md";

// @ts-ignore
const ConfirmLocation = ({ setStep }) => {
    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => setStep("getAddress")}/>
            </div>
            <div className="text-3xl font-bold mt-8">
                Confirm Location
            </div>

            <div className="mt-4">
                Adjust map to the exact location
            </div>

            <Image src={DummyMap} alt={"Map"} className="mt-4 mb-4"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setStep("confirmFeatures")}
            >
                Confirm
            </div>
        </>
    );
}

export default ConfirmLocation;
