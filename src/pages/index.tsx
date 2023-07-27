
import { FaHotjar} from "react-icons/fa6"
import {useAppSelector} from "../hooks";
import { Menu, Transition } from '@headlessui/react'
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp, AiOutlineComment,
    AiOutlineHome,
} from "react-icons/ai";

import {GrGamepad} from "react-icons/gr";
import {BsChevronDown, BsChevronUp, BsFillBookmarkFill} from "react-icons/bs";
import Header from "../components/header";
import LeftSidebar from "../components/sidebars/left-sidebar";
import BottomSideBar from "../components/sidebars/bottom-sidebar";
import PublicLayout from "../layouts/public-layout";

const settings= {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default function HomePage() {

    return (
        <PublicLayout>
            <div className="bg-darker mt-16 h-[calc(100vh-64px)] max-sm:mb-14 overflow-y-auto pl-[270px] max-sm:pl-0">
                <div className="flex flex-col gap-4 p-4">

                    {[...Array(100)].map((_,i) => (
                        <Link to={`/soru-cevap/${i}`} key={i} className="bg-[#fff] w-full min-h-full flex  rounded-md">
                            <div className="max-h-full rounded-md flex flex-col items-center gap-4 w-14 bg-default p-4">
                                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                                    <AiOutlineArrowUp  size={26}/>
                                </button>
                                <button className="rounded-full hover:bg-light hover:text-[#fff] px-2 py-2.5 ">
                                    <BsFillBookmarkFill  size={20}/>
                                </button>
                                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                                    <AiOutlineArrowDown  size={26}/>
                                </button>
                                <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 relative ">
                                    <AiOutlineComment size={24}/>
                                    <span className="absolute -top-1 bg-primary p-0.5 text-[#fff] rounded-full text-xs">10</span>
                                </button>
                            </div>
                            <div className="w-full flex flex-col gap-4 p-2 px-4">
                                <div className="flex items-center flex-wrap gap-2 justify-between max-sm:items-start max-sm:flex-col">
                                    <div className="flex items-center max-sm:flex-col max-sm:items-start gap-2">
                                        <p className="bg-primary rounded-full px-4 py-0.5 text-[#fff] text-sm">Soru</p>
                                        <p className="uppercase flex-none font-semibold">Ek SSD taktıktan sonra</p>
                                        <span className="text-secondary text-md max-sm:hidden">&#183;</span>
                                        <p className="text-secondary flex-none text-sm font-light">@walmee tarafından oluşturuldu</p>
                                    </div>
                                    <p className="text-secondary flex-none text-sm font-light">2 saat önce</p>
                                </div>
                                <div className="w-full flex-none">
                                    <p className="flex-nowrap text-sm">
                                        Merhaba arkadaşlar, 512Gb ssdye sahip bir laptopa sahiptim. Ek olarak 1tb Samsung ssd ve 512 GB harddisk taktırdım. Toplamda 3 ssd oldu yani. İşletim sisteminin 1Tb olan ssd de olmasını istiyorum ve diğerlerini de ek olarak depolama olarak kullanacağım. Hangi adımları saglamayaliyim nasıl bir kurulum gerçekleştirmeliyim? Teşekkürler
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </PublicLayout>
    )
}