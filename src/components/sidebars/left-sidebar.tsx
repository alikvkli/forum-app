import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {FaHotjar} from "react-icons/fa6";
import {Menu, Transition} from "@headlessui/react";
import {GrGamepad} from "react-icons/gr";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import React, {Fragment} from "react";
import {useAppSelector} from "../../hooks";
import classNames from "classnames";


export default function LeftSidebar() {
    const {menu} = useAppSelector(state => state.config)
    return (
        <aside
            className={classNames("fixed transition-all left-0 h-[calc(100vh-64px)] border-r-default bottom-0 z-10 w-[270px] p-4 overflow-hidden bg-[#fff] flex flex-col", {
                'max-sm:hidden': !menu,
            })}>
            <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
                <p className="uppercase text-[10px] text-secondary">içerik</p>
                <Link className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md" to="/">
                    <AiOutlineHome size={22}/>
                    <p className="font-light text-sm">Anasayfa</p>
                </Link>
                <Link className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md" to="">
                    <FaHotjar size={22}/>
                    <p className="font-light text-sm">Trendler</p>
                </Link>

                <p className="uppercase text-[10px] text-secondary">konular</p>

                <Menu>
                    <Menu.Button className="flex items-center gap-4 p-2 hover:bg-darker hover:rounded-md relative">
                        {({open}) => open ? (<>
                            <GrGamepad size={22}/>
                            <p className="font-light text-sm">Oyun</p>
                            <BsChevronUp className="absolute right-2" size={16}/>
                        </>) : (
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
        </aside>
    )
}