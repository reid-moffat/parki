"use client";
import Link from "next/link";
import '../../globals.css'
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

const Profile = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    return (
        <div>
            <div className='entire-conainer'>
                <div className='button-container'>
                    <button className='create-account'>Create Account</button>
                    <Link
                        className='sign-in'/*USED MANUAL CSS, THIS TALIWIND IS BETTER --> className="flex flex-row items-center bg-transparent w-4/5 py-2 rounded-lg mt-3 mx-auto text-[#FCF9EF] border-2 border-[#FCF9EF]"*/
                        href={{ pathname: '/profile/signIn' }}
                    >
                        Sign in
                    </Link>
                </div>
            </div>
            <h2 className='conditions-text'>
                By continuing, you confirm you've read and agreed to our Terms and Conditions and Privacy Policy
            </h2>
        </div>
    );
}

export default Profile;
