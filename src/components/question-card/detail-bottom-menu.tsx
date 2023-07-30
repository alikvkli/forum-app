import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {MdOutlineInsertComment} from "react-icons/md";
import React from "react";

const DetailBottomMenu = () => {
    return (
        <div
            className="fixed z-10  left-0 md:left-[270px] bottom-0  max-sm:w-full w-[calc(100vw-270px)]">
            <div
                className="flex items-center shadow-lg rounded-t-md h-16  backdrop-blur-sm transition-all border-t-default bg-[#fff]/80">
                <div className="flex  flex-wrap overflow-y-auto h-full items-center gap-1 p-3 break-all">
                    <p className="bg-primary flex-none w-fit rounded-full px-4 py-0.5 text-[#fff]  text-xs">Soru</p>
                    <p className="uppercase  w-fit flex-none text-xs font-semibold">ek ssd taktıktan sonra
                        kurulumu
                        yapamadım
                    </p>
                    <div
                        className="absolute bg-[#fff]/60 border-2 border-default shadow-md backdrop-blur-md py-1.5 px-4 rounded-full -top-5 right-4 flex items-center gap-2">
                        <button className="rounded-full bg-primary hover:bg-light text-[#fff] p-1 ">
                            <AiOutlineArrowUp size={18}/>
                        </button>
                        <button className="rounded-full bg-primary hover:bg-light text-[#fff] p-1 ">
                            <AiOutlineArrowDown size={20}/>
                        </button>
                        <button className="rounded-full bg-primary hover:bg-light text-[#fff] py-1.5 px-1.5 ">
                            <MdOutlineInsertComment size={16}/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailBottomMenu;