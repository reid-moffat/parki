import { MdChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

// @ts-ignore
const AdditionalInfo = ({ setStep }) => {

    const router = useRouter();

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => setStep("uploadPhotos")}/>
            </div>
            <div className="text-3xl font-bold mt-8">
                Additional information
            </div>

            <div className="mt-4">
                Is there anything else users may need to know? (ex. car size, parking instructions, etc)
            </div>

            <input
                type="text"
                placeholder="Aditional information"
                className="w-full bg-[#dae2f0] rounded-xl mt-6 pt-3.5 pl-[18px] pb-32"
            />

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => router.push('/spots')}
            >
                Confirm Spot
            </div>
        </>
    );
}

export default AdditionalInfo;
