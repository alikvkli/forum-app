import React, {FC} from "react";
import Header from "../components/header";
import LeftSidebar from "../components/sidebars/left-sidebar";
import BottomSideBar from "../components/sidebars/bottom-sidebar";

const PublicLayout:FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <>
            <Header/>
            <LeftSidebar/>
            <BottomSideBar/>
            {children}
        </>
    )
}

export default PublicLayout;