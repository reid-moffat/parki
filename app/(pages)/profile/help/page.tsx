"use client";
import { MdArrowBackIos } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@/public/profile/Search_alt.png";
import Image from "next/image";

const questions = [
    {
        question: "Can I change my reservation?",
        answer: "Yes! You can edit or cancel any upcoming reservations up until the time of your reservation. " +
            "You may also extend most active parking given availability. See terms & services for our " +
            "cancellation policy."
    },
    {
        question: "Help! Someone’s in my spot!",
        answer: "We’re sorry to hear that! Please contact us immediately and we will help resolve the situation."
    }
];

const Help = () => {

    const router = useRouter();

    const [currQuestion, setCurrQuestion] = useState(0);

    const renderQuestions = () => {

        return (
            <div>
                {questions.map((q, index) => {
                    return (
                        <div key={index} className="pt-5">
                            <div className="text-xl font-bold">{q.question}</div>
                            <div className="pt-2">{q.answer}</div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="mx-10">
            <div className="flex py-3 pt-5 text-xl">
                <MdArrowBackIos size={30} className="mt-6" onClick={() => router.push("/profile")}/>
                <div className="text-center text-4xl font-bold pt-6 pl-20">
                    Help
                </div>
            </div>

            <div className="flex rounded-2xl border-black border-solid border-[1.5px] shadow-2xl p-2">
                <Image src={SearchIcon} alt={"Search Icon"} width={30} height={20}/>
                <div className="pl-2 text-lg">Search</div>
            </div>

            {renderQuestions()}
        </div>
    )
}

export default Help;
