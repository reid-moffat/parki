"use client";
import '../../globals.css'
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

const Profile = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    return (
        <>
            <div className="text-center text-4xl font-bold pt-24">
                What do you<br/>want to do?
            </div>

            <div className="flex justify-between pt-12 px-8 text-center">
                <div className="w-full pr-3">
                    <div className="bg-[#FF4251] rounded-xl text-white h-44 w-18 mb-6">
                        Find Parking
                    </div>
                    <div className="bg-[#992831] rounded-xl text-white h-32 w-18">
                        Help
                    </div>
                </div>

                <div className="w-full pl-3">
                    <div className="bg-[#992831] rounded-xl text-white h-32 w-18 mb-6">
                        Edit my profile
                    </div>
                    <div className="bg-[#FF4251] rounded-xl text-white h-44 w-18">
                        List My Parking Spot
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
