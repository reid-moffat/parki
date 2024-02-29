"use client";
import { MdChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

// @ts-ignore
const GetAddress = ({ setStep, address, setAddress }) => {

    const router = useRouter();

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => router.push('/spots')}/>
            </div>
            <div className="text-3xl font-bold mt-8">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input
                type="text"
                placeholder="Address"
                className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setStep("confirmLocation")}
            >
                Let's Go!
            </div>
        </>
    );
}

export default GetAddress;
