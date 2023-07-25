
import {FaArrowTrendUp, FaClipboardQuestion, FaHotjar} from "react-icons/fa6"
import {BiSearchAlt} from "react-icons/bi"
import {PiUserLight} from "react-icons/pi"
import {useAppSelector} from "../hooks";
import { Menu, Transition } from '@headlessui/react'
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {
    AiFillQuestionCircle,
    AiOutlineArrowDown,
    AiOutlineArrowUp, AiOutlineComment,
    AiOutlineHome,
    AiOutlineQuestionCircle
} from "react-icons/ai";
import {TfiAnnouncement} from "react-icons/tfi";
import {HiOutlineLogout} from "react-icons/hi"
import {GrGamepad} from "react-icons/gr";
import {BsChevronDown, BsChevronUp, BsFillBookmarkFill} from "react-icons/bs";
import {MdFavorite, MdOutlineFavoriteBorder, MdOutlineReportGmailerrorred, MdReport} from "react-icons/md";

export default function HomePage() {
    const {appName} = useAppSelector(state => state.config);
    return (
        <div>
            <header className="fixed z-10  top-0 h-16 bg-[#fff] border-b-default border-default w-full p-4 flex justify-between items-center">
                <div className="flex items-center justify-center gap-2">
                    <FaClipboardQuestion className="text-primary" size={32}/>
                    <p className="font-semibold text-lg flex-none text-primary">{appName}</p>
                </div>
                <div className="w-1/2 relative">
                    <label className="absolute left-2 top-1/2 -translate-y-1/2">
                        <BiSearchAlt className="text-secondary " size={20}/>
                    </label>
                    <input className="w-full  py-2 pl-8  rounded-lg bg-default font-light text-secondary text-sm border-default  focus:outline-primary" type="text" placeholder="Arama..."/>
                </div>
                <div className="flex gap-6 justify-center items-center">
                    <button className="bg-primary text-[#fff] text-md font-semibold rounded-full py-1.5 px-10 hover:bg-light ">Giriş</button>
                    <Menu as="div" className="relative">
                        <Menu.Button>
                            <PiUserLight size={32}/>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute z-10 right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-[#fff] shadow-lg border-default focus:outline-none">
                                <Menu.Item className="flex items-center text-sm gap-2 font-normal p-4 hover:rounded-md hover:text-[#fff] hover:bg-tertiary" as={Link} to="/">
                                    <AiOutlineQuestionCircle size={20}/>
                                    <p>Yardım Merkezi</p>
                                </Menu.Item>
                                <Menu.Item className="flex items-center text-sm gap-2 p-4 hover:rounded-md hover:text-[#fff] hover:bg-tertiary" as={Link} to="/">
                                    <TfiAnnouncement size={20}/>
                                    <p>Reklam</p>
                                </Menu.Item>
                                <div className="px-1 py-1 border-t-default">
                                    <Menu.Item className="flex items-center text-sm gap-2 p-4 hover:rounded-md hover:text-[#fff] hover:bg-tertiary" as={Link} to="/">
                                        <HiOutlineLogout size={20}/>
                                        <p>Giriş Yap / Kayıt Ol</p>
                                    </Menu.Item>
                                </div>

                            </Menu.Items>
                        </Transition>

                    </Menu>
                </div>
            </header>
            <div className="fixed left-0 h-[calc(100vh-64px)] bottom-0 z-10 w-[270px] p-4 overflow-hidden bg-[#fff] flex flex-col">
                <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
                    <p className="uppercase text-[10px] text-secondary">içerik</p>
                    <Link className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md" to="">
                        <AiOutlineHome size={22}/>
                        <p className="font-light text-sm">Anasayfa</p>
                    </Link>
                    <Link className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md" to="">
                        <FaHotjar size={22}/>
                        <p className="font-light text-sm">Trendler</p>
                    </Link>

                    <p className="uppercase text-[10px] text-secondary">konular</p>

                    <Menu>
                        <Menu.Button  className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md relative">
                            {({ open }) =>  open ?  (<>
                                <GrGamepad size={22}/>
                                <p className="font-light text-sm">Oyun</p>
                                <BsChevronUp className="absolute right-2" size={16}/>
                            </>): (
                                <>
                                    <GrGamepad size={22}/>
                                    <p className="font-light text-sm">Oyun</p>
                                    <BsChevronDown className="absolute right-2" size={16}/>
                                </>
                            )}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="pl-8 py-0 flex flex-col justify-center gap-2">
                                <Menu.Item className="p-2 hover:bg-darker hover:rounded-md text-sm" as={Link} to="">
                                    Valorant
                                </Menu.Item>
                                <Menu.Item className="p-2 hover:bg-darker hover:rounded-md text-sm" as={Link} to="">
                                    PUBG
                                </Menu.Item>
                                <Menu.Item className="p-2 hover:bg-darker hover:rounded-md text-sm" as={Link} to="">
                                    L.O.L
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>

                    </Menu>
                </div>
                <div>
                    <p className="text-sm">v1.0.0.230726035</p>
                </div>
            </div>
            <div className="bg-darker mt-16 h-[calc(100vh-64px)] pl-[270px]">
                <div className="p-4">

                    <div className="bg-[#fff] w-10/12 flex rounded-md">
                        <div className="max-h-full flex flex-col items-center gap-4 w-14 bg-default p-4">

                            <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                                <AiOutlineArrowUp  size={26}/>
                            </button>
                            <button className="rounded-full hover:bg-light hover:text-[#fff] px-2 py-2.5 ">
                                <BsFillBookmarkFill  size={20}/>
                            </button>
                            <button className="rounded-full hover:bg-light hover:text-[#fff] p-1 ">
                                <AiOutlineArrowDown  size={26}/>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 p-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="bg-primary rounded-full px-4 py-0.5 text-[#fff] text-sm">Soru</p>
                                    <p className="uppercase font-semibold">Ek SSD taktıktan sonra</p>
                                    <span className="text-secondary text-md">&#183;</span>
                                    <p className="text-secondary text-sm font-light">@walmee tarafından oluşturuldu</p>
                                </div>
                                <p className="text-secondary text-sm font-light">2 saat önce</p>
                            </div>
                            <div>
                                <p className="text-sm">
                                    Merhaba arkadaşlar, 512Gb ssdye sahip bir laptopa sahiptim. Ek olarak 1tb Samsung ssd ve 512 GB harddisk taktırdım. Toplamda 3 ssd oldu yani. İşletim sisteminin 1Tb olan ssd de olmasını istiyorum ve diğerlerini de ek olarak depolama olarak kullanacağım. Hangi adımları saglamayaliyim nasıl bir kurulum gerçekleştirmeliyim? Teşekkürler
                                </p>
                            </div>
                            <div className="border-t-default py-2 flex items-center gap-4">
                                <button className="flex items-center gap-2 px-2 py-0.5 hover:rounded-md hover:bg-darker">
                                    <AiOutlineComment size={24}/>
                                    <span className="text-sm">10 Cevap</span>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}