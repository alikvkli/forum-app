import React, {FC} from "react";
import Header from "../components/header";
import LeftSidebar from "../components/sidebars/left-sidebar";

const PublicLayout:FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <>
            <Header/>
            <LeftSidebar/>
            <div className="bg-darker mt-16 min-h-[calc(100vh-64px)] pb-14 pl-[270px] max-sm:pl-0">
                <div className="flex flex-col gap-4 p-4">
                    {children}
                </div>
            </div>

        </>
    )
}

export default PublicLayout;