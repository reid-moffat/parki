"use client";
import '../../globals.css'
import { auth } from "@/config/firebase";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import FindParking from "@/public/profile/find_parking.png";
import ListSpot from "@/public/profile/list_spot.png";

const Profile = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const router = useRouter();

    const handleSignout = async () => {
        await auth.signOut()
            .then(() => router.push("/welcome"))
            .catch((error) => console.log(`Error signing out: ${error}`));
    }

    return (
        <>
            <div className="text-center text-4xl font-bold pt-20">
                What do you<br/>want to do?
            </div>

            <div className="flex justify-between pt-12 px-8 text-center">
                <div className="w-full pr-3">
                    <Image
                        src={FindParking}
                        alt={"Find Parking"}
                        className="bg-[#FF4251] rounded-xl text-white h-44 w-18 mb-6"
                        onClick={() => router.push("/map")}
                    />
                    <div
                        className="bg-[#992831] rounded-xl text-white h-32 w-18 pt-12"
                        onClick={() => router.push("/profile/help")}
                    >
                        Help
                    </div>
                </div>

                <div className="w-full pl-3">
                    <div
                        className="bg-[#992831] rounded-xl text-white h-32 w-18 mb-6 pt-12"
                        onClick={() => router.push("/profile/editProfile")}
                    >
                        Edit my profile
                    </div>
                    <Image
                        src={ListSpot}
                        alt={"List my parking spot"}
                        className="bg-[#FF4251] rounded-xl text-white h-44 w-18 mb-6"
                        onClick={() => router.push("/spots")}
                    />
                </div>
            </div>

            <div
                className="rounded-2xl bg-[#FF4251] text-white text-lg text-center mx-28 my-8 py-1"
                onClick={async () => await handleSignout()}
            >
                Sign out
            </div>
        </>
    );
}

export default Profile;
