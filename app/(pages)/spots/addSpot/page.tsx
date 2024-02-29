"use client";
import { useState } from 'react';
import { redirect } from "next/navigation";
import { auth } from "@/config/firebase";
import GetAddress from "@/app/(pages)/spots/addSpot/getAddress";
import ConfirmLocation from "@/app/(pages)/spots/addSpot/confirmLocation";
import AdditionalInfo from "@/app/(pages)/spots/addSpot/additionalInfo";
import UploadPhotos from "@/app/(pages)/spots/addSpot/uploadPhotos";
import ConfirmFeatures from "@/app/(pages)/spots/addSpot/confirmFeatures";

const AddSpot = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const [currentStep, setCurrentStep] = useState("getAddress");

    const [address, setAddress] = useState("");

    const renderPage = () => {
        switch (currentStep) {
            case "getAddress":
                return <GetAddress setStep={setCurrentStep} address={address} setAddress={setAddress}/>;
            case "confirmLocation":
                return <ConfirmLocation setStep={setCurrentStep} address={address}/>;
            case "confirmFeatures":
                return <ConfirmFeatures setStep={setCurrentStep}/>;
            case "uploadPhotos":
                return <UploadPhotos setStep={setCurrentStep}/>;
            case "additionalInfo":
                return <AdditionalInfo setStep={setCurrentStep}/>;
            default:
                throw new Error(`Invalid step in AddSpot component: ${currentStep}`);
        }
    }

    return (
        <div className="relative h-full mx-6">
            {renderPage()}
        </div>
    );
}

export default AddSpot;
