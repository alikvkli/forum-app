import PublicLayout from "../layouts/public-layout";
import QuestionCard from "../components/question-card";
import React from "react";
import {Link} from "react-router-dom";

export default function Detail() {
    return (
        <PublicLayout>
            <QuestionCard/>

            <div className="bg-[#fff] h-full flex flex-col items-start  justify-center gap-2 shadow-md p-4 rounded-md">
                <h6 className="text-md  border-b-default w-full pb-2">Yorumlar(9)</h6>

                {[...Array(10)].map((_, i) => (
                    <div key={i}
                         className="flex flex-col gap-2 relative not-last:border-b-[1px] border-b-default last:border-none pb-2 w-full">
                        <div className="flex gap-2 items-center">
                            <img
                                className="rounded-full border-[1px] border-primary/20 w-6"
                                alt="ali kavaklı"
                                src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg"/>
                            <Link to="/profile/alikvkli"
                                  className="text-sm font-semibold/50 hover:underline">ali_kvkli</Link>
                            <span className="text-secondary text-sm max-sm:hidden">&#183;</span>
                            <p className="text-secondary text-xs">2 saat önce</p>
                        </div>
                        <p className="text-sm">Sana kendi yaşadığım olayın ssi ile ortak olayım</p>
                    </div>
                ))}

            </div>
        </PublicLayout>
    )
}