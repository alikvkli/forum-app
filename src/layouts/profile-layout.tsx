import React, {FC} from "react";
import Header from "../components/header";
import LeftSidebar from "../components/sidebars/left-sidebar";
import {Link, NavLink} from "react-router-dom";
import {SlUserFollow} from "react-icons/sl";
import classNames from "classnames";

const ProfileLayout: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>
            <Header/>
            <LeftSidebar/>
            <div className="bg-darker mt-16 min-h-[calc(100vh-64px)] pb-14 pl-[270px] max-sm:pl-0">
                <div className="flex flex-col">
                    <div className="bg-[#fff] flex justify-between mb-2  items-start p-4">
                        <div className="flex max-sm:items-start md:items-center gap-2">
                            <img
                                className="w-24 rounded-lg"
                                alt="test"
                                src="https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg"/>
                            <div className="flex flex-col gap-4 items-start justify-center">
                                <div className="flex flex-col">
                                    <p className="font-semibold">Ali Kavaklı</p>
                                    <p className="text-secondary text-sm">@ali_kvkli</p>
                                </div>
                                <div className="flex flex-1 gap-2">
                                    <Link to="/" className="hover:underline flex-none  text-xs text-secondary"><span
                                        className="text-[#000] f font-semibold">89</span> Takip Edilen</Link>
                                    <Link to="/" className="hover:underline flex-none text-xs text-secondary"><span
                                        className="text-[#000] font-semibold">127</span> Takipçi</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex  flex-col items-center justify-between">
                            <button
                                className="bg-primary flex flex-none items-center  gap-2 px-3.5 py-2 rounded-full text-[#fff]">
                                <SlUserFollow/>
                                <span className="text-xs flex-none font-semibold">Takip Et</span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="sticky rounded-sm z-20  top-16 bg-[#fff] flex items-center gap-2 text-sm border-b-default p-3">
                        <NavLink
                            className={({isActive}) => classNames("text-xs px-2 py-0.5", {"bg-primary rounded-full text-[#fff]": isActive})}
                            to="/profil/alikvkli/">Sorular</NavLink>
                        <NavLink
                            className={({isActive}) => classNames("text-xs px-2 py-0.5", {"bg-primary rounded-full text-[#fff]": isActive})}
                            to="/profil/alikvkli/cevaplar">Cevaplar</NavLink>
                        <NavLink
                            className={({isActive}) => classNames("text-xs px-2 py-0.5", {"bg-primary rounded-full text-[#fff]": isActive})}
                            to="/profil/alikvkli/yorumlar">Yorumlar</NavLink>
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}

export default ProfileLayout;