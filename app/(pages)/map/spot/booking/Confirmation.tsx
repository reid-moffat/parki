"use client";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const Confirmation = () => {

    const router = useRouter();

    return (
        <div className="mx-10">
            <div className="pt-6">
                <MdOutlineArrowBackIos className='w-10 h-10' onClick={() => router.push("/map/spot")}/>
            </div>

            <div className="text-center pt-20 text-3xl font-bold">
                Spot booked!
            </div>

            <div className="text-center mt-6">
                Please send <text className="font-bold">$100</text> to 18rem8@queensu.ca to confirm your spot.
            </div>

            <div
                className="width-full rounded-2xl border-[1px] border-solid border-black text-center mt-14 p-2 font-bold"
                onClick={() => router.push("/spots")}
            >
                Back to My Spots
            </div>
        </div>
    );
}

export default Confirmation;
