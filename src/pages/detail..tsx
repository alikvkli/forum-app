import PublicLayout from "../layouts/public-layout";
import QuestionCard from "../components/question-card";
import React, {useEffect, useRef, useState} from "react";
import {useAppSelector} from "../hooks";
import Comment from "../components/question-card/comment";
import useScrollCheck from "../hooks/useScrollCheck";
import DetailBottomMenu from "../components/question-card/detail-bottom-menu";

export default function Detail() {
    const {menu} = useAppSelector(state => state.config)
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const isScrollable = useScrollCheck();
    const handleScroll = () => {
        if (cardRef.current) {
            const cardTop = cardRef.current?.getBoundingClientRect().top;
            if (cardTop < 0) {
                setShowInfo(true);
            } else {
                setShowInfo(false);
            }
        }
    }

    useEffect(() => {
        if(!isScrollable) setShowInfo(true);
        return () => {
            setShowInfo(false)
        }
    },[isScrollable])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <PublicLayout>
            <QuestionCard rounded={true} ref={cardRef}/>
            {showInfo && !menu && <DetailBottomMenu/>}


            <div className="bg-[#fff] h-full flex flex-col items-start  justify-center gap-2 shadow-md p-4 rounded-md">
                <h6 className="text-md  border-b-default w-full pb-2">Yorumlar(9)</h6>
                {[...Array(3)].map((_, i) => (
                    <Comment key={i}/>
                ))}
            </div>
        </PublicLayout>
    )
}