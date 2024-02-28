"use client";
import { MdArrowBackIos } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@/public/profile/Search_alt.png";
import Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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

    const [currQuestion, setCurrQuestion] = useState("");

    const renderQuestions = () => {

        return (
            <div>
                {questions.map((q, index) => {
                    return (
                        <div key={index} className="pt-5">
                            <div className="flex justify-between bg-[#992831] rounded-xl p-2">
                                <div
                                    className="text-base text-white ml-4"
                                    onClick={() => currQuestion === q.question ? setCurrQuestion("") : setCurrQuestion(q.question)}
                                >
                                    {q.question}
                                </div>
                                {currQuestion === q.question
                                    ? <IoIosArrowDown size={20} className="text-white mr-2"/>
                                    : <IoIosArrowUp size={20} className="text-white mr-2"/>}
                            </div>

                            {currQuestion === q.question &&
                                <div className="p-2 bg-[#FFCD1C33] rounded-xl">
                                    {q.answer}
                                </div>}
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
