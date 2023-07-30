import {FaClipboardQuestion} from "react-icons/fa6";
import {BiSearchAlt} from "react-icons/bi";
import {Menu, Transition} from "@headlessui/react";
import {PiUserLight} from "react-icons/pi";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import { AiOutlineMenu, AiOutlineQuestionCircle} from "react-icons/ai";
import {TfiAnnouncement} from "react-icons/tfi";
import {HiOutlineLogout} from "react-icons/hi";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeMenu} from "../../features/config";
import {IoCloseSharp} from "react-icons/io5";


export default function Header(){
    const dispatch = useAppDispatch();
    const {appName,menu} = useAppSelector(state => state.config);

    return (
        <header className="fixed z-10  top-0 h-16 bg-[#fff] border-b-default border-default w-full p-4 flex justify-between items-center">
            <Link to="/" onClick={() => dispatch(changeMenu(false))} className="flex items-center justify-center gap-2">
                <FaClipboardQuestion className="text-primary" size={32}/>
                <p className="font-semibold text-lg flex-none text-primary max-sm:text-sm">{appName}</p>
            </Link>
            <div className="w-1/2 relative max-sm:hidden">
                <label className="absolute left-2 top-1/2 -translate-y-1/2">
                    <BiSearchAlt className="text-secondary " size={20}/>
                </label>
                <input className="w-full  py-2 pl-8  rounded-lg bg-default font-light text-secondary text-sm border-default  focus:outline-primary" type="text" placeholder="Arama..."/>
            </div>
            <div className="max-sm:flex hidden gap-6 justify-center items-center">
                <button onClick={() => dispatch(changeMenu(!menu))}>
                    {!menu && <AiOutlineMenu size={29}/>}
                    {menu && <IoCloseSharp size={29}/>}
                </button>
            </div>
            <div className="max-sm:hidden flex gap-6 justify-center items-center">
                <button className="bg-primary text-[#fff] text-md font-semibold rounded-full py-1.5 px-10 hover:bg-light max-sm:hidden">Giriş</button>
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

    )
}