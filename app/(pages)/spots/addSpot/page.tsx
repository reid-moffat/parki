"use client";
import { MdChevronLeft } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddSpot = () => {

    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);

    const addLocation = (
        <>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setCurrentStep(2)}
            >
                Let's Go!
            </div>
        </>
    );
    const confirmLocation = (
        <>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setCurrentStep(2)}
            >
                Let's Go!
            </div>
        </>
    );
    const addFeatures = (
        <>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setCurrentStep(2)}
            >
                Let's Go!
            </div>
        </>
    );
    const uploadPhotos = (
        <>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setCurrentStep(2)}
            >
                Let's Go!
            </div>
        </>
    );
    const addInfo = (
        <>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setCurrentStep(2)}
            >
                Let's Go!
            </div>
        </>
    );

    const onClickBack = () => {
        if (currentStep === 1) {
            router.push('/spots');
        }
        setCurrentStep(currentStep - 1);
    }

    const renderPage = () => {
        switch (currentStep) {
            case 1:
                return addLocation;
            case 2:
                return confirmLocation;
            case 3:
                return addFeatures;
            case 4:
                return uploadPhotos;
            case 5:
                return addInfo;
            default:
                throw new Error(`Invalid step number: ${currentStep}`);
        }
    }

    return (
        <div className="relative h-full mx-6">
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={onClickBack}/>
            </div>

            {renderPage()}
        </div>
    );
}

export default AddSpot;
